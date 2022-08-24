import Image from "next/image";
import { useRouter } from "next/router";

const Catalog = () => {
  useRouter().query.catalogId;
  return (
    <>
      <div className="max-w-md mx-auto flex flex-col justify-center">
        <Image
          //   className="object-contain"
          loader={`https://images.kojaro.com/2021/4/73d047c2-1611-4265-9152-aa2a9a0c5cf2.jpg`}
          src={`https://images.kojaro.com/2021/4/73d047c2-1611-4265-9152-aa2a9a0c5cf2.jpg`}
          width={500}
          height={300}
          unoptimized
        />
      </div>
    </>
  );
};

export default Catalog;
