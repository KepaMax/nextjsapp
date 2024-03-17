"use client"
import { usePathname, useSearchParams } from 'next/navigation'

const TestPath = () => {
    const path = usePathname()
    const params = useSearchParams();

    return (
        <div>
            <p className='text-white py-4 px-4'>Current path: {path}</p>
            <p className='text-white py-4 px-4'>Test message: {params.get("test")}</p>
            <button onClick={() => { throw new Error("test error") }} className='text-white bg-slate-900 py-4 px-4'>Test error page</button>
        </div>
    )
}

export default TestPath