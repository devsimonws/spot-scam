import { Fragment } from "react";
import classes from "./styles/TipItem.module.scss"

const TipItem = (props) => {
    const { img, title, desc } = props.data;

    return (
        <Fragment>
            <img
                className={classes.highlight}
                src={require(`../../assets/${img}`)}
                alt="Tip image with highlight" />
            <h4>{title}</h4>
            <div className={classes.desc}>
                <p>{desc}</p>
            </div>
        </Fragment>
    )
}

export default TipItem;