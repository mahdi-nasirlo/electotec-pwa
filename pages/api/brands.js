import ApiHeader, { ApiPath } from "../../data/ApiConfig";

// pages/api/user
export async function Brands() {
  const response = await fetch(ApiPath, ApiHeader(BrandsQuery));

  const jsonData = await response.json();

  return jsonData;
}

export default async function handler(req, res) {
  const jsonData = await Brands();

  res.status(200).json(jsonData);
}

const BrandsQuery = {
  query: `
       {
        allBrand {
          id
          name
          cover
          logo
        }
      }
      `,
  variables: {
    now: new Date().toISOString(),
  },
};
