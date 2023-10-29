import Swal from "sweetalert2";

export default function useSwalFire() {
  const swalFire = (response, error, loading, loadingMessage, setError) => {
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Something went wrong!",
        text: error,
      });
      setError(null);
    }
    if (loading) {
      Swal.fire({
        title: loadingMessage.title,
        text: loadingMessage.text,
        showConfirmButton: false
      });
    }
    if (response) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: response.message,
      })
    }
  };
  return { swalFire };
}
