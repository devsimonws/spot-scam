import classes from "./styles/PageDesc.module.scss";

const PageDesc = (props) => {
    return (
        <div className={classes.pageDesc}>
            {props.children}
        </div>
    )
}

export default PageDesc;