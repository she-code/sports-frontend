import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../../contexts/users/actions";
import { useUsersDispatch } from "../../hooks/users";
import { useState } from "react";

type Inputs = {
  name: string;
  email: string;
  password: string;
};
export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const navigate = useNavigate();
  const userDispatch = useUsersDispatch();
  const [error, setError] = useState("");

  /** calls the createUser action */
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { name, email, password } = data;
    const response = await createUser(userDispatch, { name, email, password });
    if (response.ok) {
      navigate("/dashboard");
    } else {
      setError(response.error);
    }
  };
  return (
    <div className="items-center lg:w-[700px] mx-auto mt-8   md:w-2/3 sm:w-full">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        {error && (
          <div className="text-white p-2 bg-red-500 rounded mx-3 capitalize w-full text-base mr-5">
            {error.toString()}
          </div>
        )}
        <div className="p-3">
          <label htmlFor="name" className="text-xl font-semibold text-white">
            Name
          </label>
          <input
            className="border-2 border-gray-200 border-l-blue-500 rounded-lg p-3 m-2 w-full focus:outline-none focus:border-l-green-500 focus:border-l-8"
            type="text"
            placeholder="Full Name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <p className="text-white p-2 bg-red-500 rounded ml-3">
              Name is required
            </p>
          )}
        </div>
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
          {errors.email && (
            <p className="text-white p-2 bg-red-500 rounded ml-3">
              Email is required
            </p>
          )}
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
            <p className="text-white p-2 bg-red-500 rounded ml-3">
              Password is required
            </p>
          )}
        </div>

        <div className="p-3">
          <button className="uppercase bg-green-500 hover:bg-green-700 text-white font-semibold  py-3 px-4 rounded w-full text-xl">
            Submit
          </button>{" "}
        </div>
      </form>

      <p className="text-white text-lg ml-4">
        Already have an account?
        <span>
          <Link
            to="/signin"
            className="text-white text-lg font-semibold mr-2 ml-2 underline"
          >
            Sign In{" "}
          </Link>
        </span>
      </p>
    </div>
  );
}
