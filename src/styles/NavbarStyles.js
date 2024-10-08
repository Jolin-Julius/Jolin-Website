const func = (theme) => ({
    root: {
        flexGrow: "1",
        "& a": {
            textDecoration: "none",
            color: "inherit"
        },
        color: "white",
        "& header": {
            boxShadow: props => props.isHero && "none",
        },
    },
    appbar: {
        width: "100vw",
        left:"0"
    },
    toolbar: {
        justifyContent:"space-between",
    },
    middle: {
        display: "flex",
        "& a": {
            margin: "0 0.8rem"
        },
        "& a:hover": {
            textDecoration: "underline",
        },
    },
    desktop: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
    },
    mobile: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    menu: {
        "& a": {
            textDecoration: "none",
            color: "inherit"
        },
    }
});

export default func;