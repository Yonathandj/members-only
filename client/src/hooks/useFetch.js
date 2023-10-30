import { useState } from "react";

export default function useFetch() {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetcher = async ({ url, method, credentials, data }) => {
        try {
            setLoading(true)
            const body = data ? JSON.stringify(data) : ''
            const response = await fetch(url, {
                mode: "cors",
                method: method,
                credentials: credentials,
                headers: { "Content-Type": "application/json" },
                body
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
            setTimeout(() => {
                setResponse(null)
            }, 800);
        }
    }
    return { response, loading, error, setError, fetcher }
}
