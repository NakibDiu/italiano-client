import Lottie from "lottie-react";
import signupLottie from "../assets/signupLottie.json";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="">
      <div className="container mx-auto bg-slate-100 flex flex-col lg:flex-row justify-between items-center my-10 lg:my-14">
        <Lottie
          animationData={signupLottie}
          loop={true}
          className="hidden lg:block lg:basis-1/2"
        />
        <div className="lg:basis-1/2 px-5">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
