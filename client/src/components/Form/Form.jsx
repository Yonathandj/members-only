import { Link } from "react-router-dom";

export default function Form({ content, handleSubmit, loading }) {
  return (
    <form
      className="p-4 bg-purple-100 rounded-lg w-4/4 sm:w-3/4 mx-auto mt-2 sm:mt-16"
      onSubmit={handleSubmit}
    >
      {content}
      <section className="flex gap-2 mt-4 text-white">
        {loading ? (
          ""
        ) : (
          <>
            <Link to={"/"} className="px-3 py-1 bg-purple-600 rounded-2xl">
              Cancel
            </Link>
            <button
              className="px-3 py-1 bg-purple-600 rounded-2xl"
              type="submit"
            >
              Submit
            </button>
          </>
        )}
      </section>
    </form>
  );
}
