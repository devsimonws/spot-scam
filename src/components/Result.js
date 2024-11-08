import { Fragment, useContext } from "react"
import ScoreCtx from "../store/scoreCtx";

import Header from "./widgets/Header";
import Button from "./UI/Button";
import Wrapper from "./UI/Wrapper";

import classes from "./styles/Result.module.scss";

const Result = ({ phaseHandler }) => {
    const scoreCtx = useContext(ScoreCtx);
    const isWin = scoreCtx * 2 > scoreCtx.NUM_OF_QUESTION;

    return (
        <Fragment>
            <Header />
            <Wrapper>
                <div className={classes.contentCtr}>
                    {
                        isWin ?
                            <h1>CONGRATULATIONS</h1> :
                            <h1>You could be at risk.</h1>
                    }

                    <div className={classes.scoreCtr}>
                        <p>You got</p>
                        <p className={classes.score}>{scoreCtx.score} out of {scoreCtx.NUM_OF_QUESTION}</p>
                        <p>of the questions right.</p>
                    </div>

                    <div>
                        {
                            isWin ?
                                <>
                                    <p>Good job in identifying the phishing scams. Continue to stay alert and sharp against fraud and scams.</p>

                                    <p>Visit our Fraud Security Centre for more information and to keep yourself updated with the latest fraud trends.</p>
                                </> :
                                <>
                                    <p>There are a range of simple and effective ways to protect yourself online. Our tips will show you how to avoid scams, how to spot phishing emails, staying safe online and how to keep your Account details private and secure.</p>

                                    <p>Visit our Fraud Security Centre to find out what you should do and how you can prevent yourself from becoming a victim.</p>
                                </>

                        }
                    </div>
                </div>


                <Button
                    className={classes.btn}
                    href="https://google.com">
                    Visit Fraud Security Centre
                </Button>

                <Button
                    type="link"
                    clickHandler={() => phaseHandler('play')}>
                    replay
                </Button>

                <div className={classes.socialCtr}>
                    <p>Share your knowledge</p>
                    <div className={classes.iconsCtr}>
                        <Button
                            type="none"
                            href="https://facebook.com">
                            <img
                                src={require("../assets/icon-facebook.svg").default}
                                alt="facebook" />
                        </Button>
                        <Button
                            type="none"
                            href="https://twitter.com">
                            <img
                                src={require("../assets/icon-twitter.svg").default}
                                alt="twitter" />
                        </Button>
                        <Button
                            type="none"
                            href="https://whatsapp.com">
                            <img
                                src={require("../assets/icon-whatsapp.svg").default}
                                alt="whatsapp" />
                        </Button>
                    </div>
                </div>
            </Wrapper>
        </Fragment>
    )
}

export default Result;