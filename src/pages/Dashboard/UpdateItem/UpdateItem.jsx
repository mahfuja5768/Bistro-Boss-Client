import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const image_hoisting_key = import.meta.env.VITE_IMAGE_HOISTING_KEY;
const image_hoisting_api = `https://api.imgbb.com/1/upload?key=${image_hoisting_key}`;

const UpdateItem = () => {
  const {category,name,price,recipe,_id} = useLoaderData();
  // console.log(item);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    ///image upload to imgbb and then get an url
    const imgFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hoisting_api, imgFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    // console.log(res.data.data.display_url)
    if (res.data.success) {
      //now send the menu item data to the server with the image
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res?.data?.data?.display_url,
      };
      const res2 = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(res2.data);
      if (res2.data.modifiedCount > 0) {
        Swal.fire({
          title: "Success!",
          text: "Successfully menu is updated !",
          icon: "success",
          confirmButtonText: "Done",
        });
      }
    }
  };

  return (
    <div>
      <SectionTitle heading={"UPDATE ITEM"}></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe name*</span>
            </label>
            <input
              type="text" defaultValue={name}
              {...register("name", { required: true })}
              name="name"
              placeholder="Recipe name"
              className="input input-bordered"
            />
            {errors.name?.type === "required" && (
              <p role="alert" className="text-red-500">
                Recipe name is required
              </p>
            )}
          </div>
          <div className="flex justify-between gap-3">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full "
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
              {errors.category?.type === "required" && (
                <p role="alert" className="text-red-500">
                  Category is required
                </p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number" defaultValue={price}
                {...register("price", { required: true })}
                name="price"
                placeholder="price"
                className="input input-bordered"
              />
              {errors.price?.type === "required" && (
                <p role="alert" className="text-red-500">
                  price is required
                </p>
              )}
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details*</span>
            </label>
            <textarea defaultValue={recipe}
              {...register("recipe", { required: true })}
              className="h-24 textarea textarea-bordered"
            ></textarea>
            {errors.recipe?.type === "required" && (
              <p role="alert" className="text-red-500">
                recipe is required
              </p>
            )}
          </div>

          <div className="form-control my-3">
            <input 
              {...register("image", { required: true })}
              type="file"
              className="w-full file-input-warning"
            />
            {errors.image?.type === "required" && (
              <p role="alert" className="text-red-500">
                Image is required
              </p>
            )}
          </div>

          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Update Menu Item" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
