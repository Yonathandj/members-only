import { useContext } from "react"
import { authContext } from "../contexts/AuthProvider"

export default function useHandlerActiveUser() {
    const { setUser } = useContext(authContext);

    const handleSetActiveUser = ({ userId, isAdmin }) => {
        setUser({ userId, isAdmin });
        localStorage.setItem("activeUser", JSON.stringify({ userId, isAdmin }));
    };
    const handleDeleteActiveUser = () => {
        setUser({ userId: null, isAdmin: null });
        localStorage.removeItem("activeUser");
    };
    return {
        handleSetActiveUser, handleDeleteActiveUser
    }
}
