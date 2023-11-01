import { Link } from "react-router-dom";

export default function Form({ content, handleSubmit, loading }) {
  return (
    <>
      <form
        className="w-4/4 mx-auto mt-2 rounded-lg bg-purple-100 p-4 sm:mt-16 sm:w-3/4"
        onSubmit={handleSubmit}
      >
        {content}
        <section className="mt-4 flex gap-2">
          <Link
            to={loading ? "" : "/"}
            className={`rounded-2xl bg-purple-500 px-2 py-1`}
          >
            Cancel
          </Link>
          <button
            className={`rounded-2xl bg-purple-500 px-2 py-1`}
            type="submit"
            disabled={loading}
          >
            Submit
          </button>
        </section>
      </form>
    </>
  );
}
