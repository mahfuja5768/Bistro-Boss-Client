import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredBg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <section
      className="my-24 text-white pt-12 bg-fixed"
      //   style={{
      //     backgroundImage: `url(${featuredBg})`,
      //     backgroundPosition: "center",
      //   }}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${featuredBg})`,
        backgroundPosition: "center",
        backgroundBlendMode: "multiply",
      }}
    >
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"---Check it out---"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center gap-6 py-24 px-16 pt-12">
        <div>
          <img src={featuredBg} className="rounded-xl" alt="" />
        </div>
        <div className="md:ml-10">
          <p>March 20, 2023</p>
          <h3>WHERE CAN I GET SOME?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline my-6 text-white border-0 border-b-4">read more</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
