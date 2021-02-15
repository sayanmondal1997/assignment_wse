import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, Animated, Image, StyleSheet } from 'react-native'
import { globalStyles, variables } from "../globalStyles"
import Icon from 'react-native-vector-icons/dist/Ionicons'


class Invitations extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animHeight: new Animated.Value(0),
            anime: new Animated.Value(30),
            spinValue: new Animated.Value(0),
            popAnime: new Animated.Value(1),
            active: false,
            invitations: [

                { name: "Derek Anotony", uri: require("./../assets/User-1.png"), followers: 1468, address: "Kolkata, WB, India", profession: "Botanist, Trekker" },
                { name: "Corel Fincher", uri: require("./../assets/User-2.png"), followers: 1468, address: "Kolkata, WB, India", profession: "Botanist, Trekker" },
                { name: "Joviel Arnos", uri: require("./../assets/User-3.png"), followers: 1468, address: "Kolkata, WB, India", profession: "Botanist, Trekker" },
                { name: "Jamie Cobolt", uri: require("./../assets/User-4.png"), followers: 1468, address: "Kolkata, WB, India", profession: "Botanist, Trekker" },
                { name: "Derek Anotony", uri: require("./../assets/User-5.png"), followers: 1468, address: "Kolkata, WB, India", profession: "Botanist, Trekker" },
                { name: "Corel Fincher", uri: require("./../assets/User-6.png"), followers: 1468, address: "Kolkata, WB, India", profession: "Botanist, Trekker" },
                { name: "Joviel Arnos", uri: require("./../assets/User-7.png"), followers: 1468, address: "Kolkata, WB, India", profession: "Botanist, Trekker" },
                { name: "Derek Anotony", uri: require("./../assets/User-1.png"), followers: 1468, address: "Kolkata, WB, India", profession: "Botanist, Trekker" },
                { name: "Corel Fincher", uri: require("./../assets/User-2.png"), followers: 1468, address: "Kolkata, WB, India", profession: "Botanist, Trekker" },
                { name: "Joviel Arnos", uri: require("./../assets/User-3.png"), followers: 1468, address: "Kolkata, WB, India", profession: "Botanist, Trekker" },
                { name: "Jamie Cobolt", uri: require("./../assets/User-4.png"), followers: 1468, address: "Kolkata, WB, India", profession: "Botanist, Trekker" },
                { name: "Derek Anotony", uri: require("./../assets/User-5.png"), followers: 1468, address: "Kolkata, WB, India", profession: "Botanist, Trekker" },
                { name: "Corel Fincher", uri: require("./../assets/User-6.png"), followers: 1468, address: "Kolkata, WB, India", profession: "Botanist, Trekker" },
                { name: "Joviel Arnos", uri: require("./../assets/User-7.png"), followers: 1468, address: "Kolkata, WB, India", profession: "Botanist, Trekker" },

            ]
        };

    }


    activate = () => {

        this.setState({
            active: !this.state.active,
        }, () => {

            return Animated.parallel([
                Animated.timing(
                    this.state.animHeight,
                    {
                        toValue: this.state.active ? variables.height / 1.2 : 0,
                        duration: 400,
                        useNativeDriver: false
                    }),

                Animated.timing(this.state.popAnime, {
                    toValue: this.state.active ? 0.6 : 1,
                    duration: 300,
                    useNativeDriver: true
                }),
            ]).start();
        })
    }


    render() {

        let row = [];
        let col = [];

        for (let i = 0; i < this.state.invitations.length; i++) {
            const ele = this.state.invitations[i];
            col.push(<View key={i} style={styles.card}>
                <Image style={[styles.img, globalStyles.primary_H_alignment]} source={ele.uri} />
                <View style={{ flex: 1 }}>
                    <Text style={styles.name}>{ele.name}</Text>
                    <Text style={styles.profession}>{ele.followers} followers</Text>
                    <Text style={styles.profession}>{ele.address}</Text>
                    <Text style={styles.profession}>{ele.profession}</Text>
                </View>

                <View style={[globalStyles.primary_H_alignment]}>
                    <TouchableOpacity style={[styles.profileBtn, styles.accept]}>
                        <Text style={styles.acceptTxt}>Accept</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.profileBtn]}>
                        <Text style={styles.ignoreTxt}>Ignore</Text>
                    </TouchableOpacity>
                </View>

            </View>)

            if ((i + 1) % 3 === 0) {
                row.push(<View>{col}</View>)
                col = []
            }

        }

        return (
            <View style={styles.container}>
                <View style={[styles.header, globalStyles.secondary_H_alignment]}>
                    <Text style={styles.heading}>INVITATIONNS</Text>
                </View>

                {!this.state.active ? <View>
                    <View style={[globalStyles.row, globalStyles.secondary_H_alignment]}>
                        <Text style={styles.details}>You have</Text>
                        <Text style={styles.data}> 22 </Text>
                        <Text style={styles.data}>Invitations</Text>
                    </View>

                    <View style={[globalStyles.secondary_H_alignment]}>
                        <Text style={styles.details}>Check Time out</Text>
                    </View>
                </View> : null}




                <View>
                    <Animated.View style={{ maxHeight: this.state.animHeight }}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={[globalStyles.row, globalStyles.secondary_H_alignment]}>
                                {row}
                            </View>

                        </ScrollView>
                    </Animated.View>
                </View>


                <View style={globalStyles.row}>
                    <View style={styles.btnView}>

                        <TouchableOpacity activeOpacity={variables.touch_opacity} style={[styles.btn, globalStyles.secondary_H_alignment]} onPress={() => this.activate()}>
                            <Text style={styles.data}>{this.state.active ? 'Hide' : 'Show'}</Text>
                            <Icon name={this.state.active ? "md-chevron-up" : "md-chevron-down"} size={18} />
                        </TouchableOpacity>
                    </View>

                    <View >
                        <Animated.Image source={require("./../assets/Invitation_Img.png")} style={[{
                            transform: [{ scale: this.state.popAnime }]                      }
                        ]} />
                    </View>
                </View>
            </View>
        )
    }
}

export default Invitations;

const styles = StyleSheet.create({

    container: {
        backgroundColor: variables.sky
    },

    alignment: {
        marginHorizontal: variables.secondary_align,
    },

    header: {
        marginBottom: 5
    },

    heading: {
        fontSize: 18,
        fontWeight: "bold",
        color: variables.primary,
        paddingTop: 20
    },

    btnView: {
        paddingTop: 10,
    },

    btn: {
        borderRadius: 50,
        elevation: 5,
        backgroundColor: variables.sky,
        width: 64,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },

    details: {
        color: variables.secondaryTxt
    },

    data: {
        color: variables.primary,
        fontWeight: "bold"
    },

    card: {
        backgroundColor: "white",
        elevation: 5,
        height: 88,
        width: 280,
        marginVertical: 5,
        marginHorizontal: 5,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
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
        fontSize: 12
    },

    profileBtn: {
        padding: 5,
        borderRadius: 4
    },

    accept: {
        backgroundColor: variables.active
    },

    acceptTxt: {
        color: "white"
    },

    ignoreTxt: {
        color: "#AABCC3"
    }


})