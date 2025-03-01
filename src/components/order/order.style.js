import {colors, font_size} from "../../constants/theme"

export const styles = {
      order: {
            flexDirection: "row",
            marginBottom: 10,
            marginTop: 10            
      },
      logo: {
            width: 80,
            height: 80,
            borderRadius: 6
    },
      texts: {
            flex: 1,
            padding: 8
    },
      containerValue: {
            flexDirection: "row",
            justifyContent: "space-between"
    },
      value: {
            color: colors.medium_gray,
            fontSize: font_size.sm
    },
      status: {
            color: colors.green
    }
}