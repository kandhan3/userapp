
import { colors } from "./Colors";
import { deviceHeight, deviceWidth } from "./Dimens";
import { Fonts } from "./Fonts";

export const styling = {
    container: { flex: 1, backgroundColor: 'white', height: deviceHeight(100) },
    texthead: { color: 'black', fontSize: deviceHeight(2.6), fontFamily: Fonts.ibmbold },
    textsub: { color: colors.text, fontSize: deviceHeight(1.9), fontFamily: Fonts.ibmsemibold, lineHeight: 20, flex: 1 },
    textsub1: { color: colors.text, fontSize: deviceHeight(1.9), fontFamily: Fonts.ibmsemibold, lineHeight: 20, },
    textfield1: { color: 'black', fontSize: deviceHeight(2.1), fontFamily: Fonts.ibmmedium },
    field1: { backgroundColor: colors.field, borderRadius: 20, height: deviceHeight(7) },
    linegap: { with: deviceWidth(1) }

}