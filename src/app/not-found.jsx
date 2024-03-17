"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

const NotFound = () => {
    const nav = useRouter();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
            <p className="text-lg text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
            <button onClick={() => nav.replace("/")}>
                <a className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Go to Main Page
                </a>
            </button>
        </div>
    )
}

export default NotFound