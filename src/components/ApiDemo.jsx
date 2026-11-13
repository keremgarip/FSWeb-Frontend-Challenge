import { useState } from "react";
import { sendPortfolioData } from "../services/api";

function ApiDemo() {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    const handleSubmit = async () => {
        setLoading(true);
        setResult(null);
        setError("");

        try {
            const response = await sendPortfolioData({
                name: "FSWeb Frontend Challenge",
                job: "Software Developer",
            });

            setResult(response);
        } catch (err) {
            setError(
                err.response?.data?.error ||
                err.message ||
                "API request failed."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="mx-auto max-w-2xl px-6 py-16">
            <h1 className="text-3xl font-bold text-[#252B42] dark:text-white">
                Axios API Demo
            </h1>
            <p className="mt-4 text-[#6B7280] dark:text-[#D1D5DB]">
                This page demonstrates a POST request
                using Axios and a mock API service.
            </p>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="mt-6 rounded-md bg-[#4731D3] px-6 py-3 font-medium text-white hover:bg-[#3730A3] disabled:cursor-not-allowed disabled:opacity-50"            
            >
                {loading ? "Sending" : "Send POST Request"}
            </button>

            {result && (
                <div className="mt-6">
                    <h2 className="mb-3 font-semibold text-green-600 dark:text-green-400">
                        Request Successful
                    </h2>
                    <pre className="overflow-x-auto rounded-md bg-[#F3F4F6] p-4 text-sm text-[#252B42] dark:bg-[#242424] dark:text-white">
                        {JSON.stringify(result, null, 2)}
                    </pre>
                </div>
            )}

            {error && (
                <p role="alert" className="mt-6 text-sm text-red-600 dark:text-red-400">
                    Error: {error}
                </p>
            )}

            <a href="/" className="mt-8 inline-block text-sm font-medium text-[#4731D3] underline dark:text-[#A78BFA]">
                Back to Portfolio
            </a>
        </main>
    )
}

export default ApiDemo;