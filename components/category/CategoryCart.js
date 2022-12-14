import { AiFillGithub } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

const CategoryCart = ({ data }) => {
  return (
    <>
      <Link href={`/brand/${data.id}`}>
        <div className="max-w-md cursor-pointer bg-white rounded-lg flex justify-between my-4 p-3 py-4 w-full">
          <div className="flex flex-row-reverse pl-3">
            <div className="flex flex-row items-center">
              <div className="font-medium text-right text-gray-700 align-middle pt-1">
                {data.name}
              </div>

              <p
                className={`text-right font-medium text-xs text-gray-500 ${
                  data.shortInfo ?? "hidden"
                }`}
              >
                {data.shortInfo}
              </p>
            </div>
            <div className="ml-3 flex items-center">
              <Image
                alt={data.name}
                loader={data.cover}
                src={data.cover}
                width={80}
                height={80}
                unoptimized
              />
            </div>
            {/* <AiFillGithub className="text-5xl text-red-500 ml-4 border-red-200 border rounded-md p-2" /> */}
          </div>
          <div className="pr-3 flex items-center justify-start">
            <BiArrowBack className="text-xl text-red-500" />
          </div>
        </div>
      </Link>
    </>
  );
};

export default CategoryCart;
