import React from 'react'

const ChildComponent = React.forwardRef((props, ref) => {
    return <input type="text" ref={ref} />
})

export default ChildComponent