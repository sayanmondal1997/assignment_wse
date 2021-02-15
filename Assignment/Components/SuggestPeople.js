import React, { Component } from 'react'
import { Text, View, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { globalStyles, variables } from "../globalStyles"
import PeopleCard from './PeopleCard'

class Suggestion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [

                { name: "Derek Anotony", uri: require("./../assets/User-1.png"), followers: 1468, },
                { name: "Corel Fincher", uri: require("./../assets/User-2.png"), followers: 1468, },
                { name: "Joviel Arnos", uri: require("./../assets/User-3.png"), followers: 1468, },
                { name: "Jamie Cobolt", uri: require("./../assets/User-4.png"), followers: 1468, },
                { name: "Derek Anotony", uri: require("./../assets/User-5.png"), followers: 1468, },
                { name: "Corel Fincher", uri: require("./../assets/User-6.png"), followers: 1468, },
                { name: "Joviel Arnos", uri: require("./../assets/User-7.png"), followers: 1468, },
                { name: "Derek Anotony", uri: require("./../assets/User-1.png"), followers: 1468, },
                { name: "Corel Fincher", uri: require("./../assets/User-2.png"), followers: 1468, },
                { name: "Joviel Arnos", uri: require("./../assets/User-3.png"), followers: 1468, },
                { name: "Jamie Cobolt", uri: require("./../assets/User-4.png"), followers: 1468, },
                { name: "Derek Anotony", uri: require("./../assets/User-5.png"), followers: 1468, },
                { name: "Corel Fincher", uri: require("./../assets/User-6.png"), followers: 1468, },
                { name: "Joviel Arnos", uri: require("./../assets/User-7.png"), followers: 1468, },

            ]
        };

    }


    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>

                <View style={[globalStyles.secondary_H_alignment, styles.header]}>
                    <View style={styles.headingBlock}>
                        <Text style={styles.heading}>You may know</Text>

                        <Text style={styles.description}>Get to know Incredible people!</Text>
                    </View>

                    <View style={styles.btnBlock}>
                        <TouchableOpacity activeOpacity={variables.touch_opacity} style={styles.btn} onPress={() => navigate('PeoplePage')}>
                            <Text style={styles.btnTxt}>Show All ➜</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{flexDirection:'row'}}>
                    <Image style={styles.img} source={require('./../assets/YouMayKnow_IMG.png')} />
                    <ScrollView nestedScrollEnabled horizontal style={{ width:variables.width,position:'absolute',paddingLeft:150 }}>


                        {/* <View style={{ flexDirection: 'row',marginLeft:200 }}> */}
                        {this.state.data.filter((e, i) => i <= 5).map((e, i) => <PeopleCard key={i} data={e} />)}
                        {/*</View> </View> */}


                    </ScrollView>
                </View>




            </View>
        )
    }
}

export default Suggestion;

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#1D525E"
    },

    header: {
        paddingVertical: 20,
        flexDirection: "row",
    },

    headingBlock: {
        flex: 1
    },

    heading: {
        color: variables.primaryTxt,
        fontSize: 14
    },

    description: {
        color: variables.secondaryTxt,
        fontSize: 12
    },

    img: {
        width: 170,
        height: 153,
        resizeMode: "contain",
    },

    btnBlock: {
        justifyContent: "flex-end",

    },

    btn: {
        backgroundColor: "#1D525E",
        elevation: 26,
        padding: 8,
        borderRadius: 50
    },

    btnTxt: {
        color: variables.primaryTxt
    }

})