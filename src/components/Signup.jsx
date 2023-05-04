import Lottie from "lottie-react";
import Navbar from "../common/Navbar";
import signupLottie from "../assets/signupLottie.json"
import SignupForm from "./SignupForm";

const Signup = () => {
  
  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto bg-slate-100 flex flex-col lg:flex-row justify-between items-center my-10 lg:my-14">
        <Lottie animationData={signupLottie} loop={true} className="hidden lg:block lg:basis-1/2" />
        <div className="lg:basis-1/2 px-5">
            <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default Signup;
