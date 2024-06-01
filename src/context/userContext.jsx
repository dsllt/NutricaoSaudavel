import { React, createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from './authContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const nutritionalInformationData = [
  {
    "id": 1,
    "title": "Alface",
    "specification": "Verde",
    "description": "Rica em fibras e vitaminas.",
    "kcal": "15",
    "image": "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "category": "vegetais"
  },
  {
    "id": 2,
    "title": "Cenoura",
    "specification": "Laranja",
    "description": "Fonte de vitamina A e antioxidantes.",
    "kcal": "30",
    "image": "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "category": "vegetais"
  },
  {
    "id": 3,
    "title": "Brócolis",
    "specification": "Verde",
    "description": "Rico em cálcio e vitamina C.",
    "kcal": "45",
    "image": "https://images.unsplash.com/photo-1628773822503-930a7eaecf80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "category": "vegetais"
  },
  {
    "id": 4,
    "title": "Maçã",
    "specification": "Fuji",
    "description": "Doce e crocante, rica em fibras e antioxidantes.",
    "kcal": "60",
    "image": "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "category": "frutas"
  },
  {
    "id": 5,
    "title": "Banana",
    "specification": "Prata",
    "description": "Fonte de potássio e energia.",
    "kcal": "90",
    "image": "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "category": "frutas"
  },
  {
    "id": 6,
    "title": "Morango",
    "specification": "Fresco",
    "description": "Rico em vitamina C e antioxidantes.",
    "kcal": "30",
    "image": "https://images.unsplash.com/photo-1588165171080-c89acfa5ee83?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "category": "frutas"
  },
  {
    "id": 7,
    "title": "Pão Integral",
    "specification": "Grãos Integrais",
    "description": "Fonte de fibras e nutrientes.",
    "kcal": "80",
    "image": "https://images.unsplash.com/photo-1626423642268-24cc183cbacb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "category": "paes"
  },
  {
    "id": 8,
    "title": "Croissant",
    "specification": "Folhado",
    "description": "Macio e crocante.",
    "kcal": "120",
    "image": "https://images.unsplash.com/photo-1623334044303-241021148842?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "category": "paes"
  },
  {
    "id": 9,
    "title": "Pão de Queijo",
    "specification": "Mineiro",
    "description": "Queijo derretido em um pãozinho macio.",
    "kcal": "150",
    "image": "https://images.unsplash.com/photo-1559141680-d0bd7bc5af84?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "category": "paes"
  },
  {
    "id": 10,
    "title": "Brigadeiro",
    "specification": "Tradicional",
    "description": "Doce de chocolate e leite condensado.",
    "kcal": "100",
    "image": "https://images.unsplash.com/photo-1630953900113-ab915924aab2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "category": "doces"
  },
  {
    "id": 11,
    "title": "Bolo de Cenoura",
    "specification": "Com Cobertura de Chocolate",
    "description": "Bolo fofinho com cenoura e cobertura de chocolate.",
    "kcal": "200",
    "image": "https://images.unsplash.com/photo-1622926421334-6829deee4b4b?q=80&w=2192&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "category": "doces"
  },
  {
    "id": 12,
    "title": "Pudim",
    "specification": "Caseiro",
    "description": "Sobremesa cremosa e suculenta.",
    "kcal": "180",
    "image": "https://images.unsplash.com/photo-1637264596042-fcf205a81e1e?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "category": "doces"
  },
  {
    "id": 13,
    "title": "Espaguete",
    "specification": "Al Dente",
    "description": "Massa italiana clássica.",
    "kcal": "220",
    "image": "https://images.unsplash.com/photo-1556761223-4c4282c73f77?q=80&w=2130&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "category": "massas"
  },
  {
    "id": 14,
    "title": "Lasanha",
    "specification": "Bolonhesa",
    "description": "Camadas de massa, carne e queijo gratinado.",
    "kcal": "300",
    "image": "https://plus.unsplash.com/premium_photo-1671547330493-b07d377085ca?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "category": "massas"
  },
  {
    "id": 15,
    "title": "Tortellini",
    "specification": "Recheado com Queijo",
    "description": "Massa recheada com queijo, cozida em molho de tomate.",
    "kcal": "250",
    "image": "https://images.unsplash.com/photo-1628885405379-5d58de03edb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "category": "massas"
  },
  {
    "id": 16,
    "title": "Chá Verde",
    "specification": "Japonês",
    "description": "Rico em antioxidantes e estimulante.",
    "kcal": "5",
    "image": "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "category": "chas"
  },
  {
    "id": 17,
    "title": "Chá de Camomila",
    "specification": "Natural",
    "description": "Relaxante e calmante.",
    "kcal": "0",
    "image": "https://images.unsplash.com/photo-1559666548-3885a4a5e5ee?q=80&w=2202&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "category": "chas"
  },
  {
    "id": 18,
    "title": "Chá de Hibisco",
    "specification": "Com Gengibre",
    "description": "Refrescante e diurético.",
    "kcal": "10",
    "image": "https://images.unsplash.com/photo-1594136604897-29f7e564db27?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "category": "chas"
  }
];




export const UserContext = createContext({});

export default function UserProvider({ children }) {
  const {setIsAuthenticated} = useContext(AuthContext);

  const [user, setUser] = useState({});
  const [meals, setMeals] = useState({});
  const [nutritionalInformation, setNutritionalInformation] = useState(nutritionalInformationData);
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

    if (Object.keys(user).length !== 0){
      getMeals()
      getMealPlan()
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
