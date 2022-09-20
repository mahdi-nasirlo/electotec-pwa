import ApiHeader, { ApiPath } from "../../data/ApiConfig";

// pages/api/user
export async function Brand() {
  const response = await fetch(ApiPath, ApiHeader(BrandQuery));

  const jsonData = await response.json();

  return jsonData;
}

export default async function handler(req, res) {
  const jsonData = await Brand();

  res.status(200).json(jsonData);
}

const BrandQuery = {
  query: `
        {
            category(id: 1) {
              name
            }
            brand(id: 1){
                name
                cover
                logo
                info
                catalog{
                    name
                    uuid
                    path
                }
                price_list{
                    name
                    path
                    uuid
                }
                install_guide{
                    name
                    path
                    uuid
                }
            }
        }
      `,
  variables: {
    now: new Date().toISOString(),
  },
};
