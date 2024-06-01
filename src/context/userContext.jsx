import { React, createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from './authContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const mealsData = [
  {
    "id": 1,
    "title": "Refeição",
    "description": "Descrição da refeição",
    "date": "2024-05-15T00:00:00Z",
    "time": "2024-05-15T06:43:21Z",
    "is_in_diet": true,
    "user_id": "d0b77b9b-19dc-45a1-883c-d8aa0713f5bd"
  },
  {
    "id": 2,
    "title": "Refeição",
    "description": "Descrição da refeição",
    "date": "2024-05-15T00:00:00Z",
    "time": "2024-05-15T13:25:48Z",
    "is_in_diet": false,
    "user_id": "f35e0e55-fd8e-48a3-b139-912b95d82727"
  },
  {
    "id": 3,
    "title": "Refeição",
    "description": "Descrição da refeição",
    "date": "2024-05-15T00:00:00Z",
    "time": "2024-05-15T19:59:02Z",
    "is_in_diet": true,
    "user_id": "7cb80f30-2d85-4b2b-b865-0c09d8b9c8f5"
  },
  {
    "id": 4,
    "title": "Refeição",
    "description": "Descrição da refeição",
    "date": "2024-05-15T00:00:00Z",
    "time": "2024-05-15T22:11:37Z",
    "is_in_diet": false,
    "user_id": "75af53c6-4aa2-43d7-991f-6c7357a98b23"
  },
  {
    "id": 5,
    "title": "Refeição",
    "description": "Descrição da refeição",
    "date": "2024-05-16T00:00:00Z",
    "time": "2024-05-16T09:37:18Z",
    "is_in_diet": false,
    "user_id": "2f9ef7da-4b1d-4968-a4d4-0b59ef27d151"
  },
  {
    "id": 6,
    "title": "Refeição",
    "description": "Descrição da refeição",
    "date": "2024-05-16T00:00:00Z",
    "time": "2024-05-16T16:44:55Z",
    "is_in_diet": true,
    "user_id": "6c14168a-396e-4901-972f-f2ad0b3320d5"
  },
  {
    "id": 7,
    "title": "Refeição",
    "description": "Descrição da refeição",
    "date": "2024-05-16T00:00:00Z",
    "time": "2024-05-16T21:05:30Z",
    "is_in_diet": true,
    "user_id": "0f41fd8d-2d29-4a0e-ba56-1a35e744d6a7"
  },
  {
    "id": 8,
    "title": "Refeição",
    "description": "Descrição da refeição",
    "date": "2024-05-17T00:00:00Z",
    "time": "2024-05-17T04:19:47Z",
    "is_in_diet": true,
    "user_id": "fc6a7be8-85b9-42c3-9231-2f5e53f4c2a0"
  },
  {
    "id": 9,
    "title": "Refeição",
    "description": "Descrição da refeição",
    "date": "2024-05-17T00:00:00Z",
    "time": "2024-05-17T12:52:11Z",
    "is_in_diet": false,
    "user_id": "07e9c184-3a0c-4dab-90cf-58e8b378f23b"
  },
  {
    "id": 10,
    "title": "Refeição",
    "description": "Descrição da refeição",
    "date": "2024-05-17T00:00:00Z",
    "time": "2024-05-17T18:37:59Z",
    "is_in_diet": false,
    "user_id": "f4aa47af-80d4-4609-baf7-4956f043da0f"
  },
  {
    "id": 11,
    "title": "Refeição",
    "description": "Descrição da refeição",
    "date": "2024-05-18T00:00:00Z",
    "time": "2024-05-18T08:03:26Z",
    "is_in_diet": true,
    "user_id": "6847acbd-21d8-4f4a-bd45-d7acce71e8d1"
  },
  {
    "id": 12,
    "title": "Refeição",
    "description": "Descrição da refeição",
    "date": "2024-05-18T00:00:00Z",
    "time": "2024-05-18T14:29:44Z",
    "is_in_diet": true,
    "user_id": "8b0491fb-1ad4-4b86-8e3b-12d438fb96fc"
  },
  {
    "id": 13,
    "title": "Refeição",
    "description": "Descrição da refeição",
    "date": "2024-05-18T00:00:00Z",
    "time": "2024-05-18T19:08:57Z",
    "is_in_diet": false,
    "user_id": "00b91606-9538-403b-a91d-bc0baf5256de"
  },
  {
    "id": 14,
    "title": "Refeição",
    "description": "Descrição da refeição",
    "date": "2024-05-19T00:00:00Z",
    "time": "2024-05-19T03:45:05Z",
    "is_in_diet": true,
    "user_id": "1fc72b88-8c26-4f4c-ba59-514205fc58a9"
  },
  {
    "id": 15,
    "title": "Refeição",
    "description": "Descrição da refeição",
    "date": "2024-05-19T00:00:00Z",
    "time": "2024-05-19T10:17:29Z",
    "is_in_diet": false,
    "user_id": "0d8552bf-8269-44c1-9d6c-6488c94690a6"
  },
  {
    "id": 16,
    "title": "Refeição",
    "description": "Descrição da refeição",
    "date": "2024-05-19T00:00:00Z",
    "time": "2024-05-19T17:22:18Z",
    "is_in_diet": false,
    "user_id": "f2b477a5-1f33-4c5b-8c53-451c1fd13b9d"
  },
  {
    "id": 17,
    "title": "Refeição",
    "description": "Descrição da refeição",
    "date": "2024-05-19T00:00:00Z",
    "time": "2024-05-19T20:50:34Z",
    "is_in_diet": true,
    "user_id": "bafe95a2-b8ab-42e3-88ef-9071aa56b556"
  },
  {
    "id": 18,
    "title": "Refeição",
    "description": "Descrição da refeição",
    "date": "2024-05-19T00:00:00Z",
    "time": "2024-05-19T23:12:27Z",
    "is_in_diet": true,
    "user_id": "6b3e4bf4-3c91-45f4-98cb-7a2b1c500c17"
  }
];

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

const nutritionalPlanData = [
  {
    "id": 1,
    "title": "Alface",
    "quantity": "1 xícara",
    "meal": "café da manhã",
    "user_id": "d0b77b9b-19dc-45a1-883c-d8aa0713f5bd"
  },
  {
    "id": 2,
    "title": "Ovo Mexido",
    "quantity": "2 unidades",
    "meal": "café da manhã",
    "user_id": "d0b77b9b-19dc-45a1-883c-d8aa0713f5bd"
  },
  {
    "id": 3,
    "title": "Arroz Integral",
    "quantity": "1/2 xícara",
    "meal": "almoço",
    "user_id": "d0b77b9b-19dc-45a1-883c-d8aa0713f5bd"
  },
  {
    "id": 4,
    "title": "Feijão",
    "quantity": "1/2 xícara",
    "meal": "almoço",
    "user_id": "d0b77b9b-19dc-45a1-883c-d8aa0713f5bd"
  },
  {
    "id": 5,
    "title": "Maçã",
    "quantity": "1 unidade",
    "meal": "lanche",
    "user_id": "d0b77b9b-19dc-45a1-883c-d8aa0713f5bd"
  },
  {
    "id": 6,
    "title": "Iogurte Natural",
    "quantity": "200ml",
    "meal": "lanche",
    "user_id": "d0b77b9b-19dc-45a1-883c-d8aa0713f5bd"
  },
  {
    "id": 7,
    "title": "Frango Grelhado",
    "quantity": "100g",
    "meal": "janta",
    "user_id": "d0b77b9b-19dc-45a1-883c-d8aa0713f5bd"
  },
  {
    "id": 8,
    "title": "Salada de Folhas",
    "quantity": "1 prato",
    "meal": "janta",
    "user_id": "d0b77b9b-19dc-45a1-883c-d8aa0713f5bd"
  }
];


export const UserContext = createContext({});

export default function UserProvider({ children }) {
  const {setIsAuthenticated} = useContext(AuthContext);

  const [user, setUser] = useState({});
  const [meals, setMeals] = useState({});
  const [nutritionalInformation, setNutritionalInformation] = useState(nutritionalInformationData);
  const [nutritionalPlan, setNutritionalPlan] = useState(nutritionalPlanData);
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
    if (Object.keys(user).length !== 0){
      getMeals()
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
    nutritionalPlan, 
    setNutritionalPlan,
    consecutiveDaysInDiet
    };

  return <UserContext.Provider value={userObj}>{children}</UserContext.Provider>;
}
