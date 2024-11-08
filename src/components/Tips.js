import { Fragment, useRef, useReducer } from "react";

import Wrapper from "./UI/Wrapper";
import Button from "./UI/Button";
import Header from "./widgets/Header";
import PageDesc from "./widgets/PageDesc";
import PageTitle from "./widgets/PageTitle";
import TipItem from "./widgets/TipItem";

import classes from "./styles/Tips.module.scss";

import tipsData from "../data/tipsItem.json";

const indexReducer = (state, action) => {
    switch (action) {
        default:
            return 0;
        case "next":
            return Math.min(tipsData.length - 1, state + 1)
        case "prev":
            return Math.max(0, state - 1)
    }
}

const Tips = ({ phaseHandler }) => {
    const tipItemDOMRef = useRef();

    const [index, indexDispatch] = useReducer(indexReducer, 0);

    const tipHandler = (action) => {
        indexDispatch(action);

        tipItemDOMRef.current.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <Fragment>
            <Header />

            <PageDesc>
                <p>
                    Below is an example of a <span className={classes.strong}>phishing</span> email.
                </p>
                <p>
                    Learn how to spot them with these tips and protect <br />
                    yourself from becoming a victim.
                </p>
            </PageDesc>

            <PageTitle>Scam Email</PageTitle>

            <Wrapper ref={tipItemDOMRef}>
                <div className={classes.defaultImgCtr}>
                    <img
                        src={require("../assets/tip-example.jpg")}
                        alt="Tip image" />
                </div>
                <div key={Date.now()} className={classes.HighlightImgCtr}>
                    {
                        tipsData[index] && <TipItem data={tipsData[index]} />
                    }
                    <div className={classes.btnsCtr}>
                        {
                            (index === tipsData.length - 1) &&
                            <Button clickHandler={() => phaseHandler("play")}>Ready to Play!</Button>
                        }
                        {
                            (index < tipsData.length - 1) &&
                            <Button clickHandler={() => tipHandler("next")}>Next Tip</Button>
                        }
                        {
                            (index > 0) &&
                            <Button
                                type="link"
                                clickHandler={() => tipHandler("prev")}>
                                Previous Tip
                            </Button>
                        }
                    </div>
                </div>
            </Wrapper>
        </Fragment>
    )
}

export default Tips