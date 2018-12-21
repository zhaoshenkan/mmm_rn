
import {Dimensions,Platform} from 'react-native';
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

    kBasePicPrefixUrl:'https://www.mmm920.com/upload',

    kDeivceIsIos:() => {
        return (Platform.OS === 'ios') ? true:false;
    },

    a:() => {
        if (Platform.OS === 'ios') {
            if (Dimensions.get('window').width === 375 && Dimensions.get('window').height == 812 ) {
                return true;
            }
        }
    },

    kDeivceIsIphoneX(){
        console.log(1111111111111);
        if ( this.a() ) {
            return true
        }
        return false;
    },

    b(){
        console.log('bbbbb');
        this.a();
    },


    kIPhoneStatus:() => {
        if (Platform.OS === 'ios') {
            if (Dimensions.get('window').width === 375 && Dimensions.get('window').height == 812 ) {
                return 44;
            }
        }
        return 20;
    },

    kNaviBarHeight:()=>{

        if (Platform.OS === 'ios') {
            if (Dimensions.get('window').width === 375 && Dimensions.get('window').height == 812 ) {
                return 88;
            }
        }
        return 64;


        // return this.kDeivceIsIphoneX === true ? 88:64;
    },

    kTabbarSafeHeihgt:()=>{
        if (Platform.OS === 'ios') {
            if (Dimensions.get('window').width === 375 && Dimensions.get('window').height == 812 ) {
                return 34;
            }
        }
        return 0;
        // return this.kDeivceIsIphoneX === true ? 34:0;
    },

    kTabbarHeight:49,
    kStatusHeight:20,
    

      _isIphoneX(){
        if (Platform.OS === 'ios') {
            if (Dimensions.get('window').width === 375 && Dimensions.get('window').height == 812 ) {
                return true;
            }
        }
        return false;
    }




//#define APP_PIC_PREFIX_URL  @"https://www.mmm920.com/upload"
//#define APP_BASE_URL @"https://api.mmm920.com"
//#define APP_WEB_URL @"https://m.mmm920.com"
//#define kBaseUrl @"https://service.mmm920.com/

};

export  default SKConstant;