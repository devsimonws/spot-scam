import { forwardRef } from "react";

import classes from "./styles/Wrapper.module.scss";

const Wrapper = forwardRef((props, ref) => {
    return (
        <div className={`${props.outerClassName || ""} ${classes.outer}`}>
            <div className={`${props.innerClassName || ""} ${classes.inner}`} ref={ref}>
                    {props.children}
            </div>
        </div>
    )
})

export default Wrapper;