import Header from "./header";
import SectionContainer from "./SectionContainer";

function LayoutWrapper({ children }) {
  return (
    <>
      <SectionContainer>
        <Header />
        {children}
      </SectionContainer>
    </>
  );
}

export default LayoutWrapper;
