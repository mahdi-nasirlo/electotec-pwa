import BrandContainer from "../../components/brand/BrandContainer";
import { Brands } from "../api/brands";

const Brand = ({ data }) => {
  return (
    <>
      <BrandContainer brands={data} />
    </>
  );
};

// This gets called on every request
export async function getServerSideProps(context) {
  const result = await Brands();

  const data = result.data ? result.data.allBrand : [];

  // Pass data to the page via props
  return { props: { data } };
}

export default Brand;
