
import {Dimensions} from 'react-native';
const SKConstant = {

    appThemeColor:'#99CC33',
    appRedColor:'#f53739',
    appLineColor:'#eeeeee',


    kScreenWidth: Dimensions.get('window').width,
    kScreenHeight: Dimensions.get('window').height,

    viewWidth: (vWidth) => {
        return Dimensions.get('window').width*vWidth/375
    },

    viewHeight: (vHeight) => {
        return Dimensions.get('window').height*vHeight/657
    },

    kFontSize:(font) => {
        return font*Dimensions.get('window').width/375
    },



    kBasePicPrefixUrl:'https://www.mmm920.com/upload'

//#define APP_PIC_PREFIX_URL  @"https://www.mmm920.com/upload"
//#define APP_BASE_URL @"https://api.mmm920.com"
//#define APP_WEB_URL @"https://m.mmm920.com"
//#define kBaseUrl @"https://service.mmm920.com/

};

export  default SKConstant;