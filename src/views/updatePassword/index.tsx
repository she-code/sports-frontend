import UpdatePasswordForm from "./UpdatePasswordForm";

export default function UpdatePassword() {
  return (
    <div className=" w-fit shadow-xl rounded-xl mx-auto py-5  mt-11 p-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h1 className="text-center text-3xl font-semibold mb-6 mt-3 text-white">
        UPDATE PASSWORD
      </h1>
      <UpdatePasswordForm />
    </div>
  );
}
