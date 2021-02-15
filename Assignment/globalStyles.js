import { StyleSheet, Dimensions } from 'react-native';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export const variables = {
   
    height: height, //763
    width: width,
    primary: "#00394D",
    secondary: "#154A59",
    snow: "#D4DDE0",
    active: "#BFC52E",
    inactive: "#91B3A2",
    primary_align: 10,
    secondary_align: 20,
    sky: "#f1fdf5",
    primaryTxt: "#CFE7C7",
    secondaryTxt: "#698F8A",
    

    secondaryFont: 10,

    touch_opacity: 0.5

}

export const globalStyles = StyleSheet.create({

    container: {
        height: variables.height,
        position: "relative",
    },

    row: {
        flexDirection: "row"
    },

    alignCenter:{
        alignItems: "center",
    },

    secondary_H_alignment: {
        marginHorizontal: variables.secondary_align,
        
    },

    primary_H_alignment: {
        marginHorizontal: variables.primary_align
    }

  

})