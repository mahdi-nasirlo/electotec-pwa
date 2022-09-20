export default function SectionContainer({ children }) {
  return (
    <>
      <div className="mx-auto max-w-md px-1 mt-3 flex flex-col justify-center">
        {/* <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0"> */}
        {children}
      </div>
    </>
  );
}
