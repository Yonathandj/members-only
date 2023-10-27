import { useState } from "react"

export default function useCrudRoom() {
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const getRooms = async () => {
        try {
            setLoading(true)
            const response = await fetch("http://localhost:5172/rooms", {
                mode: "cors",
                method: "GET",
                credentials: 'include',
                headers: { "Content-Type": "application/json" },
            });
            if (!response.ok) {
                const res = await response.json();
                throw new Error(res.message);
            }
            const res = await response.json();
            setResponse(res);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    const postRoom = async (data) => {
        try {
            setLoading(true)
            const response = await fetch("http://localhost:5172/rooms", {
                mode: "cors",
                method: "POST",
                credentials: 'include',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                const res = await response.json();
                throw new Error(res.message);
            }
            const res = await response.json();
            setResponse(res);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    const putRoom = async (data, roomId) => {
        try {
            setLoading(true)
            const response = await fetch(`http://localhost:5172/rooms/${roomId}`, {
                mode: "cors",
                method: "PUT",
                credentials: 'include',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                const res = await response.json();
                throw new Error(res.message);
            }
            const res = await response.json();
            setResponse(res);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    const deleteRoom = async (roomId) => {
        try {
            setLoading(true)
            const response = await fetch(`http://localhost:5172/rooms/${roomId}`, {
                mode: "cors",
                method: "DELETE",
                credentials: 'include',
                headers: { "Content-Type": "application/json" },
            });
            if (!response.ok) {
                const res = await response.json();
                throw new Error(res.message);
            }
            const res = await response.json();
            setResponse(res);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    return { response, loading, error, setError, getRooms, postRoom, putRoom, deleteRoom }
}
