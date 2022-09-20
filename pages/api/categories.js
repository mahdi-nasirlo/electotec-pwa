import ApiHeader, { ApiPath } from "../../data/ApiConfig";

// pages/api/user
export async function Categories() {
  const response = await fetch(ApiPath, ApiHeader(CategoriesQuery));

  const jsonData = await response.json();

  return jsonData;
}

export default async function handler(req, res) {
  const jsonData = await Categories();

  res.status(200).json(jsonData);
}

const CategoriesQuery = {
  query: `
        {
          allCategory {
            id
            name
            shortInfo
            cover
          } 
        }
      `,
  variables: {
    now: new Date().toISOString(),
  },
};
