import React, { Component } from 'react'
import { Text, View, Modal, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/dist/Ionicons'
import { globalStyles, variables } from '../globalStyles'
import PeopleCard from '../Components/PeopleCard'


class PeoplePage extends Component {
    
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

        let row = [];
        let col = [];

        for (let i = 0; i < this.state.data.length; i++) {
            col.push(<PeopleCard key={i} data={this.state.data[i]}/>)

            if(i % 2 !== 0) {
                row.push(<View style={globalStyles.row}>{col}</View>);
                col = [];
            }
            
        }

        return (
            <View>
                <View style={styles.container}>
                        <View style={styles.header}>
                            <View style={styles.arrow}>
                                <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.goBack()}>
                                <Icon name={"arrow-back"} size={30} color={variables.inactive}/>
                                </TouchableOpacity>
                                
                            </View>

                            <View style={styles.search}>
                                <TouchableOpacity style={styles.btn}>
                                <Icon name={"search-outline"} size={30} color={variables.inactive}/>
                                </TouchableOpacity>
                               
                            </View>

                        </View>

                        <View style={styles.peopleContainer}>
                            <Text style={styles.heading}>You may know</Text>

                            <Text style={styles.description}>Get to know Incredible people!</Text>

                            <ScrollView nestedScrollEnabled contentContainerStyle={styles.scrollContainer}>
                                {row}
                            </ScrollView>
                        </View>

                    </View>
            </View>
        )
    }
}

export default PeoplePage;

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#1D525E",
        height: variables.height
    },
   
    header: {
        flexDirection: "row"
    },
   
    arrow: {
        flex: 1,
        marginLeft:17,
        marginTop: 17
    },
   
    search: {
        flex: 1,
        justifyContent:"flex-end",
        alignItems:"flex-end",
        marginRight:17,
        marginTop: 17
    },
   
    btn: {
        width: 30
    },
   
    peopleContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
        height: variables.height / 1.11
    },
   
    heading: {
        color: variables.primaryTxt,
        fontSize: 18
    },
    
    description: {
        color: variables.active
    },
   
    scrollContainer: {
        paddingVertical: 5
    }
       
   
   })