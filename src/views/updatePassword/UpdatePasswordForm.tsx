import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useUsersDispatch } from "../../hooks/users";
import { updatePassword } from "../../contexts/users/actions";
import { useState } from "react";

type Inputs = {
  current_password: string;
  new_password: string;
};
export default function UpdatePasswordForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const userDispatch = useUsersDispatch();
  const [error, setError] = useState("");
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { current_password, new_password } = data;
    const response = await updatePassword(userDispatch, {
      current_password,
      new_password,
    });
    console.log(response?.status);
    if (response?.status != "error") {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("userData");
      navigate("/signin");
    } else {
      setError(response?.message);
    }
  };
  return (
    <div className="items-center lg:w-[700px] mx-auto   md:w-2/3 sm:w-full">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        {error && (
          <div className="text-white p-2 bg-red-500 rounded mx-3 capitalize w-full text-base">
            {error.toString()}
          </div>
        )}

        <div className="p-3">
          <label
            htmlFor="current_password"
            className="text-xl font-semibold text-white"
          >
            Current Password
          </label>
          <input
            className="border-2 border-gray-200 border-l-blue-500 rounded-lg p-3 m-2 w-full focus:outline-none focus:border-l-green-500 focus:border-l-8"
            type="password"
            id="current_password"
            {...register("current_password", { required: true })}
          />
          {errors.current_password && (
            <p className="text-white p-2 bg-red-500 rounded ml-3">
              Current password is required
            </p>
          )}
        </div>
        <div className="p-3">
          <label
            htmlFor="new_password"
            className="text-xl font-semibold text-white"
          >
            Password
          </label>
          <input
            className="border-2 border-gray-200 border-l-blue-500 rounded-lg p-3 m-2 w-full focus:outline-none focus:border-l-green-500 focus:border-l-8"
            type="password"
            id="new_password"
            {...register("new_password", { required: true })}
          />
          {errors.new_password && (
            <p className="text-white p-2 bg-red-500 rounded ml-3">
              New Password is required
            </p>
          )}
        </div>

        <div className="p-3">
          <button className="bg-green-500 hover:bg-green-700 uppercase font-semibold py-3 px-4 rounded w-full text-xl text-white">
            Submit
          </button>{" "}
        </div>
      </form>
    </div>
  );
}
