import { React, createContext, useState } from 'react';
const userData = {
    "id": "d0b77b9b-19dc-45a1-883c-d8aa0713f5bd",
    "name": "Maria da Silva",
    "email": "maria@test.com",
    "password": "password"
  }

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
    "image": "https://cdn.pixabay.com/photo/2016/10/25/13/39/carrots-1768851_960_720.jpg",
    "category": "vegetais"
  },
  {
    "id": 3,
    "title": "Brócolis",
    "specification": "Verde",
    "description": "Rico em cálcio e vitamina C.",
    "kcal": "45",
    "image": "https://cdn.pixabay.com/photo/2017/11/18/17/09/broccoli-2960507_960_720.jpg",
    "category": "vegetais"
  },
  {
    "id": 4,
    "title": "Maçã",
    "specification": "Fuji",
    "description": "Doce e crocante, rica em fibras e antioxidantes.",
    "kcal": "60",
    "image": "https://cdn.pixabay.com/photo/2016/03/05/19/02/fruit-1238363_960_720.jpg",
    "category": "frutas"
  },
  {
    "id": 5,
    "title": "Banana",
    "specification": "Prata",
    "description": "Fonte de potássio e energia.",
    "kcal": "90",
    "image": "https://cdn.pixabay.com/photo/2016/03/05/20/08/bananas-1239422_960_720.jpg",
    "category": "frutas"
  },
  {
    "id": 6,
    "title": "Morango",
    "specification": "Fresco",
    "description": "Rico em vitamina C e antioxidantes.",
    "kcal": "30",
    "image": "https://cdn.pixabay.com/photo/2016/04/01/09/32/berries-1296580_960_720.jpg",
    "category": "frutas"
  },
  {
    "id": 7,
    "title": "Pão Integral",
    "specification": "Grãos Integrais",
    "description": "Fonte de fibras e nutrientes.",
    "kcal": "80",
    "image": "https://cdn.pixabay.com/photo/2018/03/17/20/14/bread-3234151_960_720.jpg",
    "category": "paes"
  },
  {
    "id": 8,
    "title": "Croissant",
    "specification": "Folhado",
    "description": "Macio e crocante.",
    "kcal": "120",
    "image": "https://cdn.pixabay.com/photo/2016/10/25/13/43/croissants-1768916_960_720.jpg",
    "category": "paes"
  },
  {
    "id": 9,
    "title": "Pão de Queijo",
    "specification": "Mineiro",
    "description": "Queijo derretido em um pãozinho macio.",
    "kcal": "150",
    "image": "https://cdn.pixabay.com/photo/2017/09/14/18/26/brazilian-cheese-bread-2740859_960_720.jpg",
    "category": "paes"
  },
  {
    "id": 10,
    "title": "Brigadeiro",
    "specification": "Tradicional",
    "description": "Doce de chocolate e leite condensado.",
    "kcal": "100",
    "image": "https://cdn.pixabay.com/photo/2017/09/25/18/22/chocolate-2787363_960_720.jpg",
    "category": "doces"
  },
  {
    "id": 11,
    "title": "Bolo de Cenoura",
    "specification": "Com Cobertura de Chocolate",
    "description": "Bolo fofinho com cenoura e cobertura de chocolate.",
    "kcal": "200",
    "image": "https://cdn.pixabay.com/photo/2016/11/18/22/26/carrot-cake-1839266_960_720.jpg",
    "category": "doces"
  },
  {
    "id": 12,
    "title": "Pudim",
    "specification": "Caseiro",
    "description": "Sobremesa cremosa e suculenta.",
    "kcal": "180",
    "image": "https://cdn.pixabay.com/photo/2016/11/29/13/42/pudding-1868573_960_720.jpg",
    "category": "doces"
  },
  {
    "id": 13,
    "title": "Espaguete",
    "specification": "Al Dente",
    "description": "Massa italiana clássica.",
    "kcal": "220",
    "image": "https://cdn.pixabay.com/photo/2017/05/07/08/56/spaghetti-2298288_960_720.jpg",
    "category": "massas"
  },
  {
    "id": 14,
    "title": "Lasanha",
    "specification": "Bolonhesa",
    "description": "Camadas de massa, carne e queijo gratinado.",
    "kcal": "300",
    "image": "https://cdn.pixabay.com/photo/2016/11/23/18/32/lasagna-1850666_960_720.jpg",
    "category": "massas"
  },
  {
    "id": 15,
    "title": "Tortellini",
    "specification": "Recheado com Queijo",
    "description": "Massa recheada com queijo, cozida em molho de tomate.",
    "kcal": "250",
    "image": "https://cdn.pixabay.com/photo/2017/07/16/10/43/tortellini-2506704_960_720.jpg",
    "category": "massas"
  },
  {
    "id": 16,
    "title": "Chá Verde",
    "specification": "Japonês",
    "description": "Rico em antioxidantes e estimulante.",
    "kcal": "5",
    "image": "https://cdn.pixabay.com/photo/2017/05/29/19/23/matcha-2356768_960_720.jpg",
    "category": "chas"
  },
  {
    "id": 17,
    "title": "Chá de Camomila",
    "specification": "Natural",
    "description": "Relaxante e calmante.",
    "kcal": "0",
    "image": "https://cdn.pixabay.com/photo/2016/11/29/08/43/chamomile-1867049_960_720.jpg",
    "category": "chas"
  },
  {
    "id": 18,
    "title": "Chá de Hibisco",
    "specification": "Com Gengibre",
    "description": "Refrescante e diurético.",
    "kcal": "10",
    "image": "https://cdn.pixabay.com/photo/2017/11/25/20/05/hibiscus-tea-2973585_960_720.jpg",
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
  const [user, setUser] = useState(userData);
  const [meals, setMeals] = useState(mealsData);
  const [nutritionalInformation, setNutritionalInformation] = useState(nutritionalInformationData);
  const [nutritionalPlan, setNutritionalPlan] = useState(nutritionalPlanData);

  const userObj = {
    user, 
    setUser,
    meals, 
    setMeals,
    nutritionalInformation, 
    setNutritionalInformation,
    nutritionalPlan, 
    setNutritionalPlan
    };

  return <UserContext.Provider value={userObj}>{children}</UserContext.Provider>;
}
