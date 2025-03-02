import {colors, font_size} from "../../constants/theme"

export const styles = {
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 12
    },
    containerList: {
        flexGrow: 1
    },
    empty: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 80
    },
    emptyText: {
        fontSize: font_size.sm,
        color: colors.dark_gray
    }
}