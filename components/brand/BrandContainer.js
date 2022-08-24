import BrandCart from "./BrandCart";

const BrandContainer = ({ brands }) => (
  <>
    <div className="grid grid-cols-2 gap-4 mt-10">
      {brands.map((brand) => (
        <>
          <BrandCart key={brand.name} data={brand} />
        </>
      ))}
    </div>
  </>
);

export default BrandContainer;
