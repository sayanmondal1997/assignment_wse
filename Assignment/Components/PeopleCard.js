import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity,StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/dist/Ionicons'
import { variables } from '../globalStyles';


class PeopleCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : props.data
        }
    }

    btnPressed = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }
    render() {
        return (
            <View style={styles.card}>
                 {/* <Icon name={"md-ellipsis-vertical-outline"} size={15} color={variables.secondaryTxt} style={{marginLeft:'auto'}} /> */}
                
                <View style={{flexDirection:'row',alignSelf: 'flex-end'}}>
                <Image style={styles.img} source={this.state.data.uri}/>
                <Icon name={"md-ellipsis-vertical-outline"} size={15} color={variables.secondaryTxt} style={{marginTop:5,marginRight:5}} />
                
               </View>
                
                <Text style={styles.name}>{this.state.data.name}</Text>
                <Text style={styles.followers}>{this.state.data.followers} followers</Text>

                <TouchableOpacity activeOpacity={variables.touch_opacity} style={[styles.btn, this.state.isActive ? styles.active : styles.inactive]} onPress={() => this.btnPressed()}>
                    {this.state.isActive && <Icon name={"md-checkmark-circle"} size={15} color={"white"}/>}
                    <Text style={styles.btnTxt}>CONNECT</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default PeopleCard;

const styles = StyleSheet.create({

    container: {
        backgroundColor: variables.sky
    },

    card: {
        height: 120,
        width: 140,
        backgroundColor: "white",
        margin: 5,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },

    img: {
        height: 30,
        width: 30,
        resizeMode: "contain",
        marginRight:35
    },

    btn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding:8,
        backgroundColor: "green",
        borderRadius: 4,
        marginTop:7
    },

    btnTxt: {
        fontSize: 10,
        color: "white",
        marginLeft: 5
    },

    inactive: {
        backgroundColor: variables.active
    },

    active: {
        backgroundColor: variables.inactive
    },

    name: {
        color: variables.primary,
        fontWeight: "bold"
    },

    followers: {
        color: variables.secondaryTxt,
        fontSize: 12
    }
})
