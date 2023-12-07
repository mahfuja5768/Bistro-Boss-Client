import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SignUp = () => {
  const { createUser, updateUserProfile, logOut } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((res) => {
      const user = res.user;
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log("user info updated");
          //save the user
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic
            .post("/users", userInfo)
            .then((res) => {
              console.log(res.data);
              if (res.data.insertedId) {
                reset();
                Swal.fire({
                  title: "Success!",
                  text: "Successfully user created!",
                  icon: "success",
                  confirmButtonText: "Done",
                });
                // sign up korar por name, profile ase na seta thekate ....
                logOut().then(() => {
                  navigate("/login");
                });
              }
            })

            .catch((e) => console.log(e));
        })

        .catch((e) => console.log(e));
    });
  };

  return (
    <div>
      <Helmet>
        <title>Bistro-Boss | Sign up</title>
      </Helmet>
      <h1 className="text-5xl font-bold flex justify-center items-center pt-24">
        Sign up now!
      </h1>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left md:w-1/2">
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card  md:w-1/2 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Type here"
                  className="input input-bordered"
                />
                {errors.name?.type === "required" && (
                  <p role="alert" className="text-red-500">
                    Name is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="url"
                  {...register("photoURL", { required: true })}
                  placeholder="photo URL"
                  className="input input-bordered"
                />
                {errors.photoURL?.type === "required" && (
                  <p role="alert" className="text-red-500">
                    Photo URL is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email?.type === "required" && (
                  <p role="alert" className="text-red-500">
                    Email is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                {/* <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p role="alert" className="text-red-500">
                    Password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p role="alert" className="text-red-500">
                    Password must be 6 characters
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p role="alert" className="text-red-500">
                    Password must be 6 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p role="alert" className="text-red-500">
                    Password must have one upper case, one lower case, one
                    number and one special characters
                  </p>
                )} */}
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                  })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p role="alert" className="text-red-500">
                    Password is required
                  </p>
                )}
              </div>

              <label className="label">
                <p>
                  Already have an account ?
                  <Link
                    to="/login"
                    className="text-blue-600 text-xl label-text-alt link link-hover"
                  >
                    login now
                  </Link>
                </p>
              </label>

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign up"
                />
              </div>
            </form>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
