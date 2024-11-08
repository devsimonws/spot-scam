import Wrapper from "./UI/Wrapper";
import Button from "./UI/Button";

import classes from "./styles/Play.module.scss";
import { Fragment } from "react";

const Play = ({ phaseHandler }) => {
    return (
        <Fragment>
            <Wrapper>
                <h1>How to play</h1>
                <p>&nbsp;</p>
                <p>
                    You will be shown different kinds of emails (or parts of emails). Look carefully, then click on “Genuine” for authentic American Express emails or “Scam” if you think it’s suspicious.
                </p>
                <div className={classes.imgCtr}>
                    <img
                        className={classes.img}
                        src={require("../assets/howtoplay.jpg")}
                        alt="How to Play" />
                    <img
                        className={classes.pointer}
                        src={require("../assets/pointer.svg").default}
                        alt="" />
                </div>

                <Button
                    className={classes.btn}
                    clickHandler={() => phaseHandler("spot")} >
                    Play
                </Button>
            </Wrapper>
        </Fragment>
    )
}

export default Play