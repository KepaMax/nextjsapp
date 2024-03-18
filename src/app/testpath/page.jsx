"use client"
import { usePathname, useSearchParams } from 'next/navigation'

const TestPath = () => {
    const path = usePathname()
    const params = useSearchParams();
    //throw new Error("test error")

    return (
        <div>
            <p className='text-white py-4 px-4'>Current path: {path}</p>
            <p className='text-white py-4 px-4'>Test message: {params.get("test")}</p>
        </div>
    )
}

export default TestPath