import CatalogMaster from "../../../components/category/CatalogMaster";
import Image from "next/image";

const Catalog = ({ data }) => {
  const { brand, category } = data;

  return (
    <>
      <CatalogMaster>
        <div className="h-screen relative">
          <div className="absolute -z-10">
            <Image
              className="h-auto object-cover"
              alt={brand.name}
              loader={brand.cover}
              src={brand.cover}
              width={2000}
              height={1000}
              unoptimized
            />
          </div>
          <div>
            <div className="flex justify-between text-right font-semibold text-5xl text-white p-3 pb-1 mt-1">
              <div>{brand.name}</div>
              <div className="p-0.5 flex justify-center bg-white rounded-full relative">
                <Image
                  className="object-contain absolute p-3"
                  alt={brand.name}
                  loader={brand.logo}
                  src={brand.logo}
                  width={50}
                  height={50}
                  unoptimized
                />
              </div>
            </div>
            <div className="text-base px-3 opacity-60 text-white font-medium">
              {category.name}
            </div>
          </div>
          <div className="mt-24 rounded-t-3xl pt-5 px-2 bg-white">
            <div className="font-semibold pb-1 text-red-500">
              معرفی تولید کننده
            </div>
            <div className="text-gray-600">{brand.info}</div>
          </div>
        </div>
      </CatalogMaster>
    </>
  );
};

// This gets called on every request
export async function getServerSideProps(context) {
  const param = context.query;
  const res = await fetch("http://localhost:8000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(query(param.brandId, param.categoryId)),
  });

  const result = await res.json();

  const data = result.data ?? [];

  // Pass data to the page via props
  return { props: { data } };
}

const query = (brandId, categoryID) => ({
  query: `
          {
            brand(id: ${brandId}) {
              name
              cover
              logo
              info
            }
            category(id: ${categoryID}){
              name
            }
          }
        `,
  variables: {
    now: new Date().toISOString(),
  },
});

export default Catalog;
