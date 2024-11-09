import { deviceHeight } from "./Dimens";
import { Fonts } from "./Fonts";

export const styling = {
    container:{flex:1,backgroundColor:'white',height:deviceHeight(100)},
    texthead:{color:'black',fontSize:deviceHeight(3.1),fontFamily:Fonts.ibmbold},
    textsub:{color:'#6B768A',fontSize:deviceHeight(1.9),fontFamily:Fonts.ibmsemibold,lineHeight:20,flex:1},
    textsub1:{color:'#6B768A',fontSize:deviceHeight(1.9),fontFamily:Fonts.ibmsemibold,lineHeight:20,},
    textfield1:{color:'black',fontSize:deviceHeight(2.1),fontFamily:Fonts.ibmmedium},
    field1:{backgroundColor:'#F7F9FB',borderRadius:20}
}