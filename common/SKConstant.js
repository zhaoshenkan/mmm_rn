
import {Dimensions} from 'react-native';
const SKConstant = {

    appThemeColor:'#99CC33',
    appRedColor:'#f53739',
    appLineColor:'#eeeeee',


    kScreenWidth: Dimensions.get('window').width,
    kScreenHeight: Dimensions.get('window').height,

    viewWidth: (vWidth) => {
        return this.kScreenWidth/375*vWidth
    },

    viewHeight: (vHeight) => {
        return this.kScreenHeight/657*vHeight
    },






};

export  default SKConstant;