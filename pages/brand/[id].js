import Image from "next/image";
import BrandCart from "../../components/brand/BrandCart";
import BrandContainer from "../../components/brand/BrandContainer";
import Layout from "../../components/master/layout";

const Brand = ({ data }) => {
  const brands = data.brands ?? [];
  return (
    <>
      <Layout>
        <BrandContainer brands={brands} />
      </Layout>
    </>
  );
};

// This gets called on every request
export async function getServerSideProps(context) {
  const id = context.query.id;
  const res = await fetch("http://localhost:8000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(query(id)),
  });

  const result = await res.json();

  const data = result.data ? result.data.category : [];

  // Pass data to the page via props
  return { props: { data } };
}

const query = (id) => ({
  query: `
          {
            category(id: ${id}) {
              name
              brands{
                id
                name
                cover
                logo
              }
            }
          }
        `,
  variables: {
    now: new Date().toISOString(),
  },
});

export default Brand;
