import React, { Fragment, useState } from "react";
import ScoreCtx from "./store/scoreCtx";

import Landing from "./components/Landing";
import Tips from "./components/Tips";
import Phishing from "./components/Phishing";
import Play from "./components/Play";
import Spot from "./components/Spot";
import Result from "./components/Result";

const NUM_OF_QUESTION = 5;

const App = () => {
    const phaseMap = {
        landing: <Landing phaseHandler={updatePhase} />,
        tips: <Tips phaseHandler={updatePhase} />,
        phishing: <Phishing phaseHandler={updatePhase} />,
        play: <Play phaseHandler={updatePhase} />,
        spot: <Spot phaseHandler={updatePhase} />,
        result: <Result phaseHandler={updatePhase} />
    }

    const [phase, setPhase] = useState(phaseMap.landing);
    const [score, setScore] = useState(0);

    function updatePhase(p) {
        setPhase(phaseMap[p]);
    }

    return (
        <Fragment>
            <ScoreCtx.Provider value={{
                NUM_OF_QUESTION: NUM_OF_QUESTION,
                score: score,
                setScore: setScore
            }}>
                {phase}
            </ScoreCtx.Provider>
        </Fragment>
    )
}

export default App