USER
{
  "id": uuid;
  "name": string;
  "email": string;
  "password": string;
}

INFORMACOES NUTRICIONAIS
  {
    "id":number;
    "title": string;
    "specification": string;
    "description": string;
    "kcal": string;
    "image": string;
    "category:": string;
  }

  DIARIO ALIMENTAR
  {
    "id":number;
    "title": string;
    "description": string;
    "date": date;
    "time": date;
    "is_in_diet:": boolean;
    "user_id": uuid;
  }

  FALE COM PROFISSIONAL
  {
    "id":number;
    "subject": string;
    "description": string;
    "user_id": string;
    "created_at": string;
  }

  AGENDAR UMA CONSULTA
  {
    "id":number;
    "professional_name": string;
    "date": date;
    "time": date;
    "user_id": string;
  }

  PLANO NUTRICIONAL
  {
    "id":number;
    "title": string;
    "quantity": string;
    "meal": string;
    "user_id": string;
  }