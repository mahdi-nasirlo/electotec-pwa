import Image from "next/image";
import avatar from "../static/logo.png";
import { HiOutlineBookmark } from "react-icons/hi";
import TestImg from "../static/useanimations-preview.gif";
import Link from "next/link";

const PostCart = () => {
  return (
    <div className="p-3 my-5 mx-auto w-full flex flex-col-reverse md:flex-row justify-center">
      <div>
        <div className="flex">
          {/* <Image
            className="object-cover rounded-full overflow-hidden"
            src={avatar}
            width={30}
            height={30}
          /> */}
          <div className="px-2 font-bold text-base">test name</div>
        </div>
        <Link href={"/article"}>
          <div className="font-bold text-lg cursor-pointer hover:text-yellow-600">
            8 free whay to make money from programming
          </div>
        </Link>
        <div className="text-gray-400">productivty skill that can we learn</div>
        <div className="flex justify-between mt-2 items-center">
          <span className="text-gray-400 text-xs">
            jun 15 . 5 min read .{" "}
            <span className="bg-gray-200 text-gray-500 rounded-2xl px-2 py-0.5">
              productivity
            </span>
          </span>
          <HiOutlineBookmark className="cursor-pointer hover:text-yellow-600" />
        </div>
      </div>
      <div className="flex justify-center md:justify-start items-center pl-3">
        <Link href={"/article"}>
          {/* <Image
            width={200}
            height={100}
            className="object-contain w-1/2 cursor-pointer"
            src={TestImg}
          /> */}
        </Link>
      </div>
    </div>
  );
};

export default PostCart;
