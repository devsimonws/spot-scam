import classes from "./styles/Header.module.scss";

const Header = () => {
    return (
        <div className={classes.header}>
            <img 
                className={classes.logo}
                src={require("../../assets/AMEX_logo-40.png")} 
                alt="AMEX logo" />
            <h1 className={classes.title}>SPOT THE SCAM</h1>
        </div>
    )
}

export default Header