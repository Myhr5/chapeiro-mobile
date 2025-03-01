import {colors, font_size} from "../../constants/theme"

export const styles = {
    container: {
        flex: 1,
        paddingLeft: 40,
        paddingRight: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background
    },
    form: {
        width: "100%",
        marginBottom: 15
    },
    scrollView: {
        width: "100%"
    },
    formGroup: {
        width: "100%",
        marginTop: 25,
        marginBottom: 40
    },
    footer: {
        width: "100%",
        backgroundColor: colors.background,
        position: "absolute",
        bottom: 0,
        marginBottom: 25,
        height: 70
    },
    footerText: {
        textAlign: "center",
        color: colors.dark_gray,
        fontSize: font_size.md
    }
}