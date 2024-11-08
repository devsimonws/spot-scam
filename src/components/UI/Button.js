import classes from "./styles/Button.module.scss";

const Button = (props) => {
    return (
        <div
            className={`${props.type ? classes[props.type] : classes.button} ${props.className || ''}`}
            style={props.inlineStyle}
            onClick={props.clickHandler}>
            {
                props.href ? 
                <a href={props.href} target="_blank">{props.children}</a> :
                props.children
            }
        </div>
    )
}

export default Button;