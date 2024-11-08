import { Fragment, useState, useRef, useEffect, useContext } from "react";
import ScoreCtx from "../store/scoreCtx";

import Wrapper from "./UI/Wrapper";
import Header from "./widgets/Header";
import PageDesc from "./widgets/PageDesc";
import PageTitle from "./widgets/PageTitle";
import SpotItem from "./widgets/SoptItem";

import classes from "./styles/Spot.module.scss";

import spotData from "../data/spotData.json";
import SpotMsg from "./widgets/SpotMsg";
import Button from "./UI/Button";

const Spot = ({ phaseHandler }) => {
    const scoreCtx = useContext(ScoreCtx);

    const spotArr = useRef([...spotData]);
    const spotItemDOMRef = useRef();

    const [question, setQuestion] = useState(null);
    const [msg, setMsg] = useState(null);

    const checkAnswer = (btn) => {
        if (!question) return;
        if (question.isScam === btn) {
            scoreCtx.setScore(prev => prev + 1)
            setMsg({
                img: "icon-correct.svg",
                title: "Well done!",
                desc: question.correct
            })
        } else {
            setMsg({
                img: "icon-wrong.svg",
                title: "Not quite...",
                desc: question.wrong
            })
        }
    }

    // select a random question
    const pickQuestion = () => {
        // go result page if picked enought question
        const qty = spotData.length - spotArr.current.length;

        if (qty >= scoreCtx.NUM_OF_QUESTION) {
            phaseHandler('result');
        } else {
            // pick random question
            const index = Math.floor(Math.random() * (spotArr.current.length - 1));
            setQuestion(spotArr.current.splice(index, 1)[0]);

            // clear spot msg popup
            setMsg(null);

            // scroll to section top
            if (spotItemDOMRef.current) {
                spotItemDOMRef.current.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            }
        }
    }

    // pick a random question first
    useEffect(pickQuestion, []);

    return (
        <Fragment>
            <Header />

            <PageDesc>
                <Button
                    type="link"
                    className={classes.link}
                    clickHandler={() => phaseHandler('play')} >
                    How to play?
                </Button>
            </PageDesc>

            <PageTitle>Is this email Genuine or a Scam?</PageTitle>

            <div className={classes.spotItemOuterCtr}>
                {
                    question && (
                        <Wrapper ref={spotItemDOMRef}>
                            <SpotItem
                                data={question}
                                genuineHandler={() => checkAnswer('genuine')}
                                scamHandler={() => checkAnswer('scam')} />
                        </Wrapper>
                    )
                }
                {
                    msg && (
                        <SpotMsg
                            data={msg}
                            nextHandler={pickQuestion} />
                    )
                }
            </div>
        </Fragment>
    )
}

export default Spot;