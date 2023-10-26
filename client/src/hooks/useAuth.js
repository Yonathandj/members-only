import { useState } from "react";

export default function useAuth() {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const signUp = async (data) => {
        try {
            setLoading(true)
            const response = await fetch("http://localhost:5172/sign-up", {
                mode: "cors",
                method: "POST",
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

    const signIn = async (data) => {
        try {
            setLoading(true)
            const response = await fetch("http://localhost:5172/sign-in", {
                mode: "cors",
                method: "POST",
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

    const logOut = async (data) => {
        try {
            setLoading(true)
            const response = await fetch("http://localhost:5172/log-out", {
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
    return { response, loading, error, setError, signUp, signIn, logOut }
}
