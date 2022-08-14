import Image from "next/image";
import Logo from "../static/logo.png";

const styles = {
  wrapper: "flex justify-center ",
};

const Header = () => {
  return (
    <>
      <div className="flex justify-center gap-10 p-5 bg-yellow-500">
        <div className="max-w-7xl flex flex-1 justify-between">
          <div className="flex items-center cursor-pointer">
            <Image
              width={200}
              height={40}
              className={styles.logo}
              src={Logo}
            ></Image>
          </div>
          <div className="flex space-x-4 cursor-pointer items-center">
            <div>Our Story</div>
            <div>Membership</div>
            <div>Sign In</div>
            <div className="bg-black text-white rounded-3xl items-center p-2">
              Get Started
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
