import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { globalStyles, variables } from "../globalStyles"
import Icon from 'react-native-vector-icons/dist/Ionicons'


class Connects extends Component {

    constructor(props) {
        super(props);
        this.state = {

            people: [

                { name: "Derek Anotony", uri: require("./../assets/User-1.png"), profession: "Botanist, Trekker" },
                { name: "Corel Fincher", uri: require("./../assets/User-2.png"), profession: "Botanist, Trekker" },
                { name: "Joviel Arnos", uri: require("./../assets/User-3.png"), profession: "Botanist, Trekker" },
                { name: "Jamie Cobolt", uri: require("./../assets/User-4.png"), profession: "Botanist, Trekker" },
                { name: "Derek Anotony", uri: require("./../assets/User-5.png"), profession: "Botanist, Trekker" },
                { name: "Corel Fincher", uri: require("./../assets/User-6.png"), profession: "Botanist, Trekker" },
                { name: "Joviel Arnos", uri: require("./../assets/User-7.png"), profession: "Botanist, Trekker" },
                { name: "Derek Anotony", uri: require("./../assets/User-1.png"), profession: "Botanist, Trekker" },
                { name: "Corel Fincher", uri: require("./../assets/User-2.png"), profession: "Botanist, Trekker" },
                { name: "Joviel Arnos", uri: require("./../assets/User-3.png"), profession: "Botanist, Trekker" },
                { name: "Jamie Cobolt", uri: require("./../assets/User-4.png"), profession: "Botanist, Trekker" },
                { name: "Derek Anotony", uri: require("./../assets/User-5.png"), profession: "Botanist, Trekker" },
                { name: "Corel Fincher", uri: require("./../assets/User-6.png"), profession: "Botanist, Trekker" },
                { name: "Joviel Arnos", uri: require("./../assets/User-7.png"), profession: "Botanist, Trekker" },

            ]
        };

    }


    render() {
        return (
            <View style={{ overflow: "hidden" }}>
                <View style={[globalStyles.secondary_H_alignment, styles.header]}>
                    <View style={styles.heading}>
                        <Text style={styles.headingTxt}>Your Connects</Text>
                    </View>

                    <View style={styles.dropdownView}>
                        <TouchableOpacity activeOpacity={variables.touch_opacity} style={styles.dropdown}>
                            <Text style={styles.sortby}>Sort by:</Text>
                            <Text style={styles.recent}>Recent</Text>
                            <Icon name={"md-chevron-down"} size={18} />
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={{ marginBottom: 10 }}>
                    {this.state.people.map((e, i) => <View key={i} style={[globalStyles.row, styles.connectLists, globalStyles.secondary_H_alignment]}>

                        <View style={[]}>
                            <Image source={e.uri} style={styles.img} />
                        </View>

                        <View style={styles.details}>
                            <Text style={styles.name}>{e.name}</Text>
                            <View style={{flexDirection:'row',alignItems:"center"}}>
                            <Icon name={"md-albums"} size={10} color={variables.secondaryTxt} />
                            <Text style={styles.profession}>{e.profession}</Text>
                            </View>
                            
                        </View>

                        <View style={styles.mr10}>
                            <TouchableOpacity>
                                <Icon name={"md-chatbubble-ellipses"} size={25} color={variables.secondaryTxt} />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity>
                                <Icon name={"md-ellipsis-vertical-outline"} size={25} color={variables.secondaryTxt} />
                            </TouchableOpacity>
                        </View>

                    </View>)}
                </View>
            </View>
        )
    }
}

export default Connects;

const styles = StyleSheet.create({

    header: {
        marginTop: 20,
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center"
    },
   
  
    headingTxt: {
        color: variables.primary,
        fontSize: 14,
        fontWeight: "bold"
    },
   
    dropdownView: {
        flex:1
    },
   
    dropdown: {
        flexDirection: "row",
        alignSelf: "flex-end",
        backgroundColor: "white",
        borderRadius: 4,
        elevation: 4,
        padding: 3,
        alignItems:"center",
        justifyContent: "center"
    },
   
    sortby: {
        color: "#90949C",
        marginRight: 5
    },
   
    recent: {
        color: variables.primary,
        marginRight: 8
    },
   
    connectLists: {
        backgroundColor: "white",
        elevation: 5,
        padding: 10, flex: 1,
        marginVertical: 5,
        borderRadius: 8,
        alignItems: "center"
    },
   
    img: {
        height: 45,
        width: 45,
        resizeMode: "contain"
    },
   
    name: {
        color: variables.primary,
        fontWeight: "bold",
        fontSize: 14
    },
   
    profession: {
        color: "#AABCC3",
        fontSize: 12,
        marginLeft:5
    },
   
    details: {
        marginLeft: 10,
        flex:1,
    },
   
    mr10:{
       marginRight:10
    }
       
   
   })