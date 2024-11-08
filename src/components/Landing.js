import { Fragment } from "react";

import Wrapper from "./UI/Wrapper";
import Button from "./UI/Button";

import classes from "./styles/Landing.module.scss";

const Landing = ({ phaseHandler }) => {
    return (
        <Fragment>
            <Wrapper>
                <img
                    className={classes.logo}
                    src={require("../assets/AMEX_logo-114.png")}
                    alt="AMEX Logo" />

                <h1 className={classes.title}>
                    <span>Spot</span><br />
                    <span>the SCAM</span>
                </h1>

                <div className={classes.contentWrapper}>
                    <p className={classes.subtitle1}>Protect yourself from phishing scams</p>
                    <p className={classes.subtitle2}>Want to know how to spot a scam and keep your Account safe?</p>
                    <p className={classes.desc}>
                        Phishing emails are easy to spot once you know<br />
                        what you're looking for. Our handy advice<br />
                        will help you stay one step ahead.
                    </p>
                </div>

                <Button
                    className={classes.button}
                    inlineStyle={{ width: 200 }}
                    clickHandler={() => phaseHandler("tips")}>
                    Start Spotting
                </Button>

                <Button
                    type="link"
                    clickHandler={() => phaseHandler("phishing")}>
                    More about phishing
                </Button>
            </Wrapper>
        </Fragment>
    )
}

export default Landing;