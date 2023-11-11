const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="max-w-screen-xl mx-auto text-center md:w-3/12 my-12">
      <p className="text-[#D99904] ">{subHeading}</p>
      <h3 className=" text-3xl uppercase border-y-4 py-4 mt-2">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
