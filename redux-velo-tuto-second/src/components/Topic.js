import React from 'react'

const Topic = ({params}) => {
    return(
        <div>
            This is Topic component
            <h3>{params.topicId}</h3>
        </div>
    )
}

export default Topic
