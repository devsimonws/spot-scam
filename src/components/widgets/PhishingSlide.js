import { Fragment } from "react";
import classes from "./styles/PhishingSlide.module.scss"

const PhishingSlide = (props) => {
    const { icon, title, desc } = props.data;

    let descHTML = desc.split("\n");

    descHTML = descHTML.map((ele, i) => {
        // replace ® with <sup>®</sup>
        if (ele.includes("®")) {
            const strGrp = ele.split("®");
            ele = strGrp.reduce((prev, curr) => {
                return (
                    <>
                        <>{prev}</><sup className="copyright-marker">®</sup><>{curr}</>
                    </>)
            });
        }

        return <p key={i}>{ele}</p>
    })

    return (
        <Fragment>
            <div className={classes.slideCtr}>
                <img
                    src={require(`../../assets/${icon}`)}
                    alt="" />
                <h2>{title}</h2>
                <div className={classes.descCtr}>
                    {descHTML}
                </div>
            </div>
        </Fragment>
    )
}

export default PhishingSlide