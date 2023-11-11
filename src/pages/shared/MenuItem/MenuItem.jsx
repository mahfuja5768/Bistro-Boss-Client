const MenuItem = ({ item }) => {
  const { image, name, price, recipe } = item;
  return <div className="flex gap-5 mb-8">
    <img src={image} className="w-[118px] h-[104px] rounded-b-full rounded-tr-full" alt="" />
    <div>
        <h3 className="text-xl uppercase mb-3">{name}-------------</h3>
        <p>{recipe}</p>
    </div>
        <p className="text-[#BB8506]">${price}</p>
  </div>;
};

export default MenuItem;
