import Image from "next/image";
import Link from "next/link";

const BrandCart = ({ data }) => (
  <>
    <Link href={`/catalog/${data.id}`}>
      <div className="max-w-md cursor-pointer bg-white rounded-lg flex justify-center p-1 py-4 w-full">
        <div className="flex flex-col">
          <div className="flex items-center justify-center">
            <Image
              className="object-fill rounded-md"
              alt={data.name}
              loader={data.cover}
              src={data.cover}
              width={170}
              height={90}
              unoptimized
            />
          </div>

          {/* <div className="w-full text-center text-lg font-semibold text-red-500 mt-2">
          {data.name}
        </div> */}
        </div>
      </div>
    </Link>
  </>
);

export default BrandCart;
