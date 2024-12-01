import {colors} from './Colors';
import {deviceHeight} from './Dimens';
import {Fonts} from './Fonts';

export const styling = {
  container: {flex: 1, backgroundColor: 'white', height: deviceHeight(100)},
  texthead: {
    color: 'black',
    fontSize: deviceHeight(2.5),
    fontFamily: Fonts.ibmbold,
  },
  textsub: {
    color: colors.text,
    fontSize: deviceHeight(1.9),
    fontFamily: Fonts.ibmsemibold,
    lineHeight: 20,
    flex: 1,
  },
  textsub1: {
    color: colors.text,
    fontSize: deviceHeight(1.9),
    fontFamily: Fonts.ibmsemibold,
    lineHeight: 20,
  },
  textgreen: {
    color: '#1DA844',
    fontSize: deviceHeight(1.9),
    fontFamily: Fonts.ibmsemibold,
    lineHeight: 20,
  },
  textfield1: {
    color: 'black',
    fontSize: deviceHeight(2.1),
    fontFamily: Fonts.ibmmedium,
  },
  field1: {
    backgroundColor: colors.field,
    borderRadius: 20,
    height: deviceHeight(7),
  },
  textblue: {
    color: '#0883FE',
    fontSize: deviceHeight(2.1),
    fontFamily: Fonts.ibmmedium,
  },
};
