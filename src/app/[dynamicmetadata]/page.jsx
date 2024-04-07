import React from 'react'

export const generateMetadata = ({ params }) => {
    return {
        title: params.dynamicmetadata
    }
}

const DynamicTitleMetadata = () => {
    return (
        <div>Dynamic metadata</div>
    )
}
export default DynamicTitleMetadata