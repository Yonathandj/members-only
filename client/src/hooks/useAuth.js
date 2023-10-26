import { useState } from "react";

export default function useAuth() {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const signUp = async (data) => {
        try {
            setLoading(true)
            const response = await fetch("http://localhost:5172/sign-up", {
                mode: "cors",
                method: "POST",
                credentials: 'include',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error('error occured');
            }
            const res = await response.json();
            setResponse(res);
        } catch (error) {
            setError(true);
        } finally {
            setError(false);
            setLoading(false);
        }
    }

    const signIn = async (data) => {
        try {
            setLoading(true)
            const response = await fetch("http://localhost:5172/sign-in", {
                mode: "cors",
                method: "POST",
                credentials: 'include',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error('error occured');
            }
            const res = await response.json();
            setResponse(res);
        } catch (error) {
            setError(true);
        } finally {
            setError(false);
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
                throw new Error('error occured');
            }
            const res = await response.json();
            setResponse(res);
        } catch (error) {
            setError(true);
        } finally {
            setError(false);
            setLoading(false);
        }
    }
    return { response, loading, error, signUp, signIn, logOut }
}
