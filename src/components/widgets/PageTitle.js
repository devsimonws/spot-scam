import classes from "./styles/PageTitle.module.scss"

const PageTitle = (props) => {
    return (
        <div className={classes.pageTitle}>
            <h3>{props.children}</h3>
        </div>
    )
}

export default PageTitle;