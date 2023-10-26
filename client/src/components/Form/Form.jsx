import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Form({
  content,
  handleSubmit,
  loading,
  error,
  response,
}) {
  error
    ? Swal.fire({
        icon: "error",
        title: "Ooops... Something went wrong!",
        text: error,
      })
    : Swal.fire({
        icon: "success",
        title: "Success",
        text: response.message,
      });
  return (
    <>
      <form
        className="w-4/4 mx-auto mt-2 rounded-lg bg-purple-100 p-4 sm:mt-16 sm:w-3/4"
        onSubmit={handleSubmit}
      >
        {content}
        <section className="mt-4 flex gap-2 text-white">
          <Link to={"/"} className="rounded-2xl bg-purple-600 px-3 py-1">
            Cancel
          </Link>
          <button
            className="rounded-2xl bg-purple-600 px-3 py-1"
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
