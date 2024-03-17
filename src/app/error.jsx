"use client"

const Error = ({ error, reset }) => {
    return (
        <div className="dark h-screen flex items-center justify-center">
            <p className='text-white py-4 px-4'>Error: {error.message || "something went wrong"}</p>
            <button onClick={reset} className='text-white py-4 px-4'>Reset</button>
        </div>
    )
}

export default Error