import Image from "next/image";
import BrandDataShit from "../../../components/brand/BrandDataShit";
import { Brand } from "../../api/brand";

const Catalog = ({ data }) => {
  const { brand, category } = data;

  return (
    <>
      <div className="h-screen relative mt-4">
        <div className="absolute -z-10">
          <Image
            className="h-auto object-cover rounded-lg"
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
                className="object-contain absolute p-3 rounded-full"
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
        <div className="mt-24 flex flex-col rounded-t-3xl pt-5 px-2 bg-white">
          <div className="font-semibold pb-1 text-red-500">
            معرفی تولید کننده
          </div>
          <div className="text-gray-600">{brand.info}</div>
          <BrandDataShit
            catalog={brand.catalog}
            priceList={brand.price_list}
            installGuide={brand.install_guide}
          />
        </div>
      </div>
    </>
  );
};

// This gets called on every request
export async function getServerSideProps(context) {
  const result = await Brand();

  const data = result.data ?? [];

  // Pass data to the page via props
  return { props: { data } };
}

export default Catalog;
