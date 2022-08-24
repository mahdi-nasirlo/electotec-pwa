import Header from "./header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="max-w-md px-1 mx-auto mt-3 flex flex-col justify-center">
        <Header />
        {children}
      </div>
    </>
  );
};

export default Layout;
