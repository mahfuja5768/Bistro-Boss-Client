import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const axiosPublic = useAxiosPublic();
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleLogin().then((res) => {
      console.log(res.user);
      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };
  return (
    <div>
      <div className="w-full flex justify-center px-8 pb-12">
        <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">
          <span className="">
            <FaGoogle></FaGoogle>
          </span>{" "}
          Sign in with google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
