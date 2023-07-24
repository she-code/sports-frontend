import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useUsersDispatch } from "../../hooks/users";
import { signinUser } from "../../contexts/users/actions";
import { useState } from "react";

type Inputs = {
  name: string;
  email: string;
  password: string;
};
export default function SignIn() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const userDispatch = useUsersDispatch();
  const [error, setError] = useState("");
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data;
    const response = await signinUser(userDispatch, { email, password });
    if (response.ok) {
      navigate("/dashboard");
    } else {
      setError(response.error);
    }
  };
  return (
    <div className="items-center lg:w-[700px] mx-auto   md:w-2/3 sm:w-full">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        {error && (
          <span className="text-red-500 capitalize">{error.toString()}</span>
        )}

        <div className="p-3">
          <label htmlFor="email" className="text-xl font-semibold text-white">
            Email
          </label>
          <input
            className="border-2 border-gray-200 border-l-blue-500 rounded-lg p-3 m-2 w-full focus:outline-none focus:border-l-green-500 focus:border-l-8"
            type="text"
            placeholder="user@example.com"
            {...register("email", { required: true })}
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
        </div>
        <div className="p-3">
          <label
            htmlFor="passwords"
            className="text-xl font-semibold text-white"
          >
            Password
          </label>
          <input
            className="border-2 border-gray-200 border-l-blue-500 rounded-lg p-3 m-2 w-full focus:outline-none focus:border-l-green-500 focus:border-l-8"
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}
        </div>

        <div className="p-3">
          <button className="bg-green-500 hover:bg-green-700 uppercase font-semibold py-3 px-4 rounded w-full text-xl text-white">
            Submit
          </button>{" "}
        </div>
      </form>

      <p className=" text-lg ml-4 text-white">
        New User?
        <span>
          <Link
            to="/signup"
            className=" text-lg font-semibold mr-2 ml-2  underline text-white"
          >
            Create Account{" "}
          </Link>
        </span>
      </p>
    </div>
  );
}
