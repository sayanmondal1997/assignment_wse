import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Image, TextInput } from 'react-native'
import { variables, globalStyles } from '../globalStyles'

import Icon from 'react-native-vector-icons/dist/Ionicons'


class Search extends Component {


    constructor(props) {
        super(props);
        this.state = {
        };

    }


    render() {
        return (

            <View style={[styles.searchContainer, globalStyles.alignCenter]}>
                <TouchableOpacity style={styles.userBtn} activeOpacity={0.7} onPress={() => this.props.leftDrawer("left")}>
                    <Image style={styles.userBtn} source={require('./../assets/User.png')} />
                </TouchableOpacity>

                <View style={styles.searchBar}>
                    <TextInput style={styles.searchInp} placeholder="Search in WeNaturalist" placeholderTextColor={variables.secondaryTxt} />
                </View>
                <View style={{ flex:2,flexDirection:'row',height:'100%'}}>
                    <TouchableOpacity style={styles.btn}>
                        <Image source={require('./../assets/noun_notification_1863770.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.btn,styles.borderRadius]}>
                        <Icon name={"md-calendar-outline"} size={20} color={variables.secondaryTxt} />
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

export default Search;


const styles = StyleSheet.create({

    searchContainer: {
        backgroundColor: variables.primary,
        height: 45,
        marginHorizontal: variables.primary_align,
        marginVertical: variables.primary_align,
        borderRadius: 8,
        flexDirection: "row"
    },

    userBtn: {
        height: 25,
        width: 35,
        marginLeft: 5,
        marginRight: 15,
        resizeMode: "contain",
    },

    searchBar: {
        width: 190,
        flex: 5
    },

    searchInp: {
        color: variables.secondaryTxt,
        paddingLeft: 8,
        paddingRight: 16
    },

    btn: {
        width:42,
        alignItems: "center",
        justifyContent: "center",
        height:'100%',
        backgroundColor: variables.secondary,
        marginLeft: 'auto'
    },
    borderRadius:{
        borderBottomRightRadius:8,
        borderTopRightRadius:8
    }
        
    


})