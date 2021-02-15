import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { variables,globalStyles } from "../globalStyles"

import Icon from 'react-native-vector-icons/dist/Ionicons'


class LowerNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isActive: 3,
            buttons :[
                {
                    title: "Home", 
                    icon: {inactive: "md-home-outline", active: "md-home"}, 
                    color: {inactive: variables.secondaryTxt, active: variables.active}
                },
                {
                    title: "Explore", 
                    icon: {inactive: "md-compass-outline", active: "md-compass"},  
                    color: {inactive: variables.secondaryTxt, active: variables.active}
                },
                {
                    title: "Chats", 
                    icon: {inactive: "md-chatbubble-outline", active: "md-chatbubble"},  
                    color: {inactive: variables.secondaryTxt, active: variables.active}
                },
                {
                    title: "Connects", 
                    icon: {inactive: "md-people-outline", active: "md-people"},  
                    color: {inactive: variables.secondaryTxt, active: variables.active}
                },
                {
                    title: "Projects", 
                    icon: {inactive: "md-briefcase-outline", active: "md-briefcase"},  
                    color: {inactive: variables.secondaryTxt, active: variables.active}
                },
            ]
    }
}

    navBtnPressed = (idx) => {
        this.setState({
            isActive: idx
        },() => this.props.activeNav(this.state.isActive))
    }

    render() {
        return (
            <View>
                <View style={styles.lowerNavContainer}>
                    {this.state.buttons.map((e, i) =>
                        <View style={[styles.btnView, this.state.isActive === i ? styles.activeBtn : styles.inactiveBtn]} key={i}>

                            <TouchableOpacity onPress={() => this.navBtnPressed(i)} style={[styles.btn,globalStyles.alignCenter]}>
                                <Icon name={this.state.isActive === i ? e.icon.active : e.icon.inactive} size={25} color={this.state.isActive === i ? e.color.active : e.color.inactive} />
                                <Text style={styles.Txt}>{e.title}</Text>
                            </TouchableOpacity>

                        </View>
                    )}
                </View>
            </View>
        )
    }
}

export default LowerNav;

const styles = StyleSheet.create({

    lowerNavContainer: {
        flexDirection: 'row', 
        backgroundColor: variables.primary, 
        width: variables.width,
        // height:65
    },

    btnView: {
        flex: 1
    },

    activeBtn: {
        borderTopColor: variables.active,
        borderTopWidth: 5
    },
  
    btn: {
        flex: 1, 
        justifyContent: "center",
        textAlign: "center",
        marginVertical: 15
    },

    Txt: {
        fontSize: 13,
        textAlign: "center",
        color: variables.secondaryTxt
    }


})
