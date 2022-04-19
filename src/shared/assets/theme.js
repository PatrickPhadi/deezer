import { createTheme } from "@mui/material";

export default createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#144973"
        }
    },
    typography: {
        subtitle1: {
            fontWeight: "bold",
            fontSize: 16,
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap"
        },
        subtitle2: {
            fontSize: 15,
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap"
        }
    }
});