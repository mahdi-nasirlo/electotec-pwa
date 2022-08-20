import { useRouter } from "next/router";
import Header from "../../components/header";

const Catalog = () => {
  useRouter().query.catalogId;
  return (
    <>
      <div className="max-w-md mx-auto mt-3 flex flex-col justify-center">
        <Header />
      </div>
    </>
  );
};

export default Catalog;
