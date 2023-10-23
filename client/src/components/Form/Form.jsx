import { Link } from "react-router-dom";

export default function Form({ content, handleSubmit, loading }) {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <form
        className="p-6 bg-purple-100 rounded-lg w-2/4"
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
    </div>
  );
}
