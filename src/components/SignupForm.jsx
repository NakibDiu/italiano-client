import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { toast } from "react-toast";
import { NavLink, useNavigate } from "react-router-dom";
import Spinner from "../common/Spinner";

const SignupForm = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    photoUrl: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [isCreating, setIsCreating] = useState(false);

  const { signupUser, updateUser, googleSignUp, githubSignUp } =
    useContext(AuthContext);

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateFormData();
    if (Object.keys(errors).length === 0) {
      const { name, email, password, photoUrl } = formData;
      setIsCreating(true);
      // Submit the form data
      signupUser(email, password)
        .then((res) => {
          if (name) {
            const userInfo = {
              displayName: name,
              photoURL: photoUrl,
            };
            updateUser(userInfo)
              .then((res) => {
                toast.success("Account created successfully");
                setIsCreating(false);
                setFormData(initialState);
                navigate("/login");
                console.log(res);
              })
              .catch((err) => {
                toast.error(err.message);
              });
          }
        })
        .catch((errors) => {
          toast.error(errors.message);
          console.log(errors);
        });
    } else {
      setErrors(errors);
    }
  };

  const validateFormData = () => {
    let errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };
  // google sign up
  const handleGoogleSignUp = () => {
    setIsCreating(true);
    googleSignUp()
      .then((res) => {
        toast.success("Account created successfully");
        setIsCreating(false);
        navigate("/login");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  // github sign up
  const handleGithubSignUp = () => {
    setIsCreating(true);
    githubSignUp()
      .then((res) => {
        toast.success("Account created successfully");
        setIsCreating(false);
        navigate("/login");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="container mx-auto py-5">
      <h1 className="text-2xl font-bold mb-4 text-center">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.name ? "border-red-500" : ""
            }`}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic">{errors.name}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.email ? "border-red-500" : ""
            }`}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.password ? "border-red-500" : ""
            }`}
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && (
            <p className="text-red-500 text-xs italic">{errors.password}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="confirmPassword"
          >
            Confirm Password:
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.confirmPassword ? "border-red-500" : ""
            }`}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs italic">
              {errors.confirmPassword}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="photoUrl"
          >
            Photo URL:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="url"
            id="photoUrl"
            name="photoUrl"
            value={formData.photoUrl}
            onChange={handleChange}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
            type="submit"
          >
            {isCreating ? <Spinner /> : "Sign Up"}
          </button>
        </div>
        <h3 className="text-lg lg:text-xl text-center py-4">Or</h3>
      </form>
      <div className="flex items-center justify-center gap-7">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleGoogleSignUp}
        >
          {isCreating ? <Spinner /> : "Google"}
        </button>
        <button
          className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleGithubSignUp}
        >
          {isCreating ? <Spinner /> : "Github"}
        </button>
      </div>
      <p className="text-center py-3 text-base lg:text-lg text-gray-700">
        Already have an account ? <NavLink to="/login" className="text-blue-500 font-bold">Log in</NavLink>
      </p>
    </div>
  );
};

export default SignupForm;
