import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import useSwalFire from "../../hooks/useSwalFire";
import useNavigation from "../../hooks/useNavigation";
import useHandlerActiveUser from "../../hooks/useHandlerActiveUser";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";

export default function Logout() {
  const { handleDeleteActiveUser } = useHandlerActiveUser();
  const { response, loading, error, setError, fetcher } = useFetch();
  const { navigation } = useNavigation();
  const { swalFire } = useSwalFire();
    useEffect(() => {
        if (response) {
            handleDeleteActiveUser();
        }
    }, [response, handleDeleteActiveUser])
  const handleLogout = async () => {
    await fetcher({
      url: "http://localhost:3200/log-out",
      method: "POST",
      credentials: "include",
      data: null,
    });
  };
  swalFire(
    response,
    error,
    loading,
    {
      title: "Wait a second...",
      text: "logout process",
    },
    setError,
  );
  response && navigation("/");
  
  return (
    <button className="flex gap-2" onClick={handleLogout}>
      <ArrowLeftCircleIcon className="w-6" />
      <p className="text-purple-600">Logout</p>
    </button>
  );
}
