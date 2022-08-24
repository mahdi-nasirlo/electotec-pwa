import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const BrandCart = ({ data }) => (
  <>
    <Link
      href={`/catalog/${useRouter().query.id}/${data.id}`}
      // as="/catalog/[categoryId]/[brandId]"
    >
      <div className="max-w-md cursor-pointer bg-white rounded-lg flex justify-center p-1 py-4 w-full">
        <div className="flex flex-col">
          <div className="flex items-center justify-center">
            <Image
              className="object-fill rounded-md"
              alt={data.name}
              loader={data.logo}
              src={data.logo}
              width={170}
              height={90}
              unoptimized
            />
          </div>
        </div>
      </div>
    </Link>
  </>
);

export default BrandCart;
