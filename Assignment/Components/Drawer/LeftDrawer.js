import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { globalStyles, variables } from "../../globalStyles"
import Icon from 'react-native-vector-icons/dist/Ionicons'

class LeftDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            upperPart: [
                { title: "Reseach", icon: "md-flag-outline" },
                { title: "Forum", icon: "md-newspaper-outline" },
                { title: "Bookmarks", icon: "md-bookmark-outline" },
                { title: "Drafts", icon: "md-document-outline" },
                { title: "Calender", icon: "md-calendar-outline" }
            ],

            lowerPart: [
                { title: "Add opportunity", icon: "md-add-circle-outline" },
                { title: "Settings", icon: "md-settings-outline" },
                { title: "Language", icon: "md-globe-outline" },
                { title: "Customer Supports", icon: "md-help-buoy-outline" }
            ]

        };

    }

    profile() {
        console.log("profile")
    }

    logout() {
        console.log('logout')
    }

    lower(e) {
        console.log(e);
    }

    upper(e) {
        console.log(e);
    }

    render() {
        return (
            <>
                <View style={styles.profileAlign}>
                    <View style={[globalStyles.row, globalStyles.alignCenter]}>
                        <Image style={styles.userImg} source={require('./../../assets/User.png')} />
                        <View>
                            <Text style={styles.usernameTxt}>Username</Text>
                            <TouchableOpacity onPress={() => this.profile()}>
                                <Text style={styles.viewProfileTxt}>View Profile ➜</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

                <View style={styles.upperBlock}>
                    {this.state.upperPart.map((e, i) => 
                       <View key={i} style={{}}>
                            <TouchableOpacity style={[styles.drawerContent, globalStyles.row]} key={i} onPress={() => this.upper(e)}>
                                <Icon name={e.icon} size={25} color={variables.snow} />
                                <Text style={[styles.blockTxt,styles.upperTxtColor]}>{e.title.toUpperCase()}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>



                <View style={styles.lowerBlock}>
                    {this.state.lowerPart.map((e, i) => {
                        return (<View key={i} style={{}}>
                            <TouchableOpacity style={[styles.drawerContent, globalStyles.row]} key={i} onPress={() => this.lower(e)}>
                                <Icon name={e.icon} size={25} color={variables.primaryTxt} />
                                <Text style={[styles.blockTxt,styles.lowerTxtColor]}>{e.title}</Text>
                            </TouchableOpacity>
                        </View>)
                    })}
                </View>

                <View style={styles.logout}>
                    <TouchableOpacity style={styles.logoutBtn} onPress={() => this.logout()}>
                        <Icon name={"md-power-outline"} color={variables.snow} size={15} />
                        <Text style={styles.logoutTxt}>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </>
        )
    }
}

export default LeftDrawer

const styles = StyleSheet.create({


    blockTxt: {
        fontSize: 14,
        marginLeft: 15,
        
    },
    upperTxtColor:{
        color: variables.snow,
    },
    lowerTxtColor:{
        color: variables.primaryTxt,
    },

    upperBlock: {
        padding: 30,
        paddingLeft: 45,
        justifyContent: "center",
        flex: 2,
    },

    profileAlign: {
        marginLeft: 30,
        justifyContent: "flex-end",
        flex: 1
    },

    drawerContent: {
        paddingVertical: 8,
        alignItems: "center"
    },

    userImg: {
        height: 65,
        width: 65,
        resizeMode: "contain",
        marginRight: 15
    },



    usernameTxt: {
        color: "white",
        fontSize: 20
    },

    viewProfileTxt: {
        color: "#DADD21"
    },

    lowerBlock: {
        backgroundColor: variables.secondary,
        justifyContent: "center",
        padding: 30,
        paddingLeft: 45
    },

    logout: {
        alignItems: "flex-end",
        padding: 20,
        backgroundColor: variables.secondary,
    },

    logoutBtn: {
        flexDirection: "row",
        alignItems: "center"
    },

    logoutTxt: {
        color: "white",
        marginLeft: 5
    },


})