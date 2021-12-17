import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles(() => ({
    button: {
        bottom: "3rem",
        left: "68rem",
        borderRadius: "50%",
        width: "48px",
        height: "4  8px",
        marginLeft: "10px",
        backgroundColor: "#75b5fd",
        color: "#fff",
    },
    search: {
        width: "35%",
        marginRight: "10px"
    },
    containerCard: {
        backgroundColor: "#4d648d",
        width: "45%",
        height: "8rem",
        left: "43rem",
        bottom: "24px",
        borderRadius: "5px",
        marginTop: "10px",
    },
    book: {
        "& a": {
            textOverFlow: "ellipsis",
            //overFlow: "hidden",
            textDecoration: "none",
            color: "black",
        },
        fontFamily: "Times New Roman",
        fontSize: "9px",
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        marginLeft: "0.5rem",
        padding: "0px",
    },
    title: {
        textAlign: "center",
        position: "relative",
        marginTop: "10px",
        marginBottom: "10px",
    }

}))