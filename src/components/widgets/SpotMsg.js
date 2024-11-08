import { Fragment } from "react";

import Button from "../UI/Button";
import Wrapper from "../UI/Wrapper";

import classes from "./styles/SpotMsg.module.scss"

const SpotMsg = (props) => {
    const { img, title, desc } = props.data;

    let descHTML = desc.split("\n");
    descHTML = descHTML.map((ele, i) => {
        return <p key={i}>{ele}</p>
    })

    return (
        <Fragment>
            <Wrapper outerClassName={classes.msgCtr}>
                <div className={classes.contentCtr}>
                    <img
                        src={require(`../../assets/${img}`)}
                        alt="" />
                    <h2>{title}</h2>
                    <div>
                        {descHTML}
                    </div>
                </div>
                <Button clickHandler={props.nextHandler}>Next</Button>
            </Wrapper>
        </Fragment>
    )
}

export default SpotMsg;