import { Link } from "react-router-dom";

export default function Form({ children }) {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <h2 className="text-5xl mb-10 text-purple-600 font-bold">Sign In Form</h2>
      <form className="p-6 bg-purple-100 rounded-lg w-2/4">
        {children}
        {/*  */}
        <section className="flex gap-2 mt-4 text-white">
          <Link to={"/"} className="px-3 py-1 bg-purple-600 rounded-2xl">
            Cancel
          </Link>
          <button className="px-3 py-1 bg-purple-600 rounded-2xl" type="submit">
            Submit
          </button>
        </section>
      </form>
    </div>
  );
}
