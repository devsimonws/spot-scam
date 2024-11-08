import { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Wrapper from "./UI/Wrapper";
import Button from "./UI/Button";
import PhishingSlide from "./widgets/PhishingSlide";

import "swiper/css";
import classes from "./styles/Phishing.module.scss"

import phishingData from "../data/phishing.json";

const Phishing = ({ phaseHandler }) => {
    const [icon, setIcon] = useState("Hand-Left.svg");

    function updateIcon() {
        if (this.isEnd) {
            setIcon("Hand-Right.svg");
        } else if (this.activeIndex > 0) {
            setIcon("Hand-Horizontal.svg");
        } else {
            setIcon("Hand-Left.svg");
        }
    }

    const slides = phishingData.map(ele => {
        return (
            <SwiperSlide key={ele.title}>
                <PhishingSlide data={ele} />
            </SwiperSlide>
        )
    })

    return (
        <Fragment>
            <Wrapper>
                <Button
                    className={classes.close}
                    clickHandler={() => phaseHandler("landing")}>
                    <img
                        src={require("../assets/CLOSE.svg").default}
                        alt="" />
                </Button>

                <div className={classes.slideCtr}>
                    <Swiper
                        spaceBetween={50}
                        autoHeight={true}
                        onSlideChange={updateIcon} >
                        {slides}
                    </Swiper>
                </div>

                <img
                    className={classes.icon}
                    src={require(`../assets/${icon}`)}
                    alt="hand icon" />
            </Wrapper>
        </Fragment>
    )
}

export default Phishing;