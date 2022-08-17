import { AiFillGithub } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";

const CategoryCart = () => {
  return (
    <>
      <div className="max-w-md bg-white rounded-lg flex justify-between my-4 p-3 py-4 w-full">
        <div className="pr-3 flex items-center justify-start">
          <BiArrowBack className="text-xl text-red-500" />
        </div>
        <div className="flex pl-3">
          <div>
            <div className="font-semibold text-right text-gray-700 align-middle pt-2">
              روشنایی
            </div>

            <p className="text-right font-medium text-sm text-gray-500">
              مثل لامپ پنل هالوژن ریسه
            </p>
          </div>
          <AiFillGithub className="text-5xl text-red-500 ml-4 border-red-200 border rounded-md p-2" />
        </div>
      </div>
    </>
  );
};

export default CategoryCart;
