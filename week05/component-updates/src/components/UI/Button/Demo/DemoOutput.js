import React from "react";

const DemoOutput = (props) => {
    return <p>{props.show ? 'this is new' : ''}</p>
}

// memo - only reevaluate if prop value actually changes
//only use when it will cut off an entire branch of componenets.
export default React.memo(DemoOutput)
