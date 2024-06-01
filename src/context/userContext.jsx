import { React, createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from './authContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext({});

export default function UserProvider({ children }) {
  const {setIsAuthenticated} = useContext(AuthContext);

  const [user, setUser] = useState({});
  const [meals, setMeals] = useState({});
  const [nutritionalInformation, setNutritionalInformation] = useState({});
  const [mealPlan, setMealPlan] = useState({});
  const [consecutiveDaysInDiet, setConsecutiveDaysInDiet] = useState(0);


  useEffect(()=> {
    const getUserData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@user_data');
        if(jsonValue!=null){
          setUser(JSON.parse(jsonValue));
        }
        return true;
      } catch (e) {
        console.error("Error retrieving user data", e);
      }
    };
    getUserData();
  },[])

  useEffect(()=>{

    async function getMeals(){
      const response = await fetch('http://0.0.0.0:8080/diary', {
        method: 'GET',
      });
      const meals = await response.json();
      const userMeals = meals.filter(meal=> meal.user_id === user.id)
      setMeals(userMeals);

      let mealsByDate = {};
      for (let meal of userMeals) {
        let date = meal.date; 
        if (!mealsByDate[date]) {
          mealsByDate[date] = [];
        }
        mealsByDate[date].push(meal);
      }
      let dates = Object.keys(mealsByDate).sort((a, b) => new Date(b) - new Date(a));
      for (let date of dates) {
        if (new Date(date) > new Date()) continue; 
        if (mealsByDate[date].every(meal => meal.is_in_diet)) {
          setConsecutiveDaysInDiet(prevState => prevState + 1)
        } else {
          break;
        }
      }
    }

    async function getMealPlan(){
      const response = await fetch('http://0.0.0.0:8080/meal_plan', {
        method: 'GET',
      });
      const mealPlan = await response.json();
      const userMealPlan = mealPlan.filter(item=> item.user_id === user.id)
      setMealPlan(userMealPlan);
    }

    async function getNutritionalInformation(){
      const response = await fetch('http://0.0.0.0:8080/nutritional_information', {
        method: 'GET',
      });
      const nutritional_information = await response.json();
      setNutritionalInformation(nutritional_information);
    }

    if (Object.keys(user).length !== 0){
      getMeals();
      getMealPlan();
      getNutritionalInformation();
      setIsAuthenticated(true);
    }
  }, [user])

  const userObj = {
    user, 
    setUser,
    meals, 
    setMeals,
    nutritionalInformation, 
    setNutritionalInformation,
    mealPlan, 
    setMealPlan,
    consecutiveDaysInDiet
    };

  return <UserContext.Provider value={userObj}>{children}</UserContext.Provider>;
}
