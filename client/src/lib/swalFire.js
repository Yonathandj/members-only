import Swal from "sweetalert2";

export const swalFire = (response) => {
    if (response.ok) {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: response.message,
            showConfirmButton: false,
            timer: 1600,
        });
        return 'success'
    }
    if (!response.ok) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: `Failed try again`,
            showConfirmButton: false,
            timer: 1600,
        });
        return 'failed';
    }
}   