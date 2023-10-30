import Swal from "sweetalert2";

export default function useSwalFire() {
  const swalFireAlert = (response, error, loading, loadingMessage, setError) => {
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

  const swalFireInputText = async (text) => {
    const { value: roomName } = await Swal.fire({
      title: `${text}`,
      input: 'text',
      inputAttributes: {
        required: true,
        autoComplete: "off"
      },
      inputLabel: 'Room name',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'You need to write something!'
        }
      }
    })
    if (roomName) {
      return roomName;
    }
    return null
  }

  const swalFireInputSelect = async (options) => {
    const { value: selectedRoomId } = await Swal.fire({
      title: 'Select available room',
      input: 'select',
      inputOptions: options,
      showCancelButton: true,
      inputPlaceholder: 'Select room',
      inputValidator: (value) => {
        if (!value) {
          return 'You need to select something!'
        }
      }
    })
    if (selectedRoomId) {
      return selectedRoomId
    }
    return null
  }


  return { swalFireAlert, swalFireInputText, swalFireInputSelect };
}
