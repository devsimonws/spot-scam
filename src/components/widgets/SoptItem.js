import { Fragment, forwardRef } from "react";

import Button from "../UI/Button";

import classes from "./styles/SpotItem.module.scss";

const SpotItem = (props) => {
    const { img } = props.data

    return (
        <Fragment>
            <img
                src={require(`../../assets/${img}`)}
                alt="Spot image" />

            <div className={classes.btnCtr}>
                <Button clickHandler={props.genuineHandler}>Genuine</Button>
                <Button clickHandler={props.scamHandler}>Scam</Button>
            </div>
        </Fragment>
    )
}

export default SpotItem;