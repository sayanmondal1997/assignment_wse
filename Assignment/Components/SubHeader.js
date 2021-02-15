import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { globalStyles, variables } from "../globalStyles"

class SubHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: 0,
            navButtons: [
                { title: 'CONNECTS' },
                { title: 'FOLLOWING' },
                { title: 'RECRUITERS' }
            ]
        }
    }
    activeSubHeader(i) {
        this.setState({
            isActive: i
        })
    }


    render() {

        return (
            <View style={styles.subHeaderContainer}>
                <View style={[globalStyles.row, styles.subHeader]}>
                    {this.state.navButtons.map((e, i) => <TouchableOpacity key={i} style={[styles.nav, this.state.isActive === i && styles.activeBtn]} onPress={() => this.activeSubHeader(i)}>
                        <Text style={[]}>{e.title}</Text></TouchableOpacity>)}
                </View>
            </View>
        )
    }
}

export default SubHeader;


const styles = StyleSheet.create({
    subHeaderContainer: {
        overflow: 'hidden',
        paddingBottom: 5
    },

    subHeader: {
        backgroundColor: "white",
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
        zIndex: 10

    },
    nav: {
        padding: 10,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    activeBtn: {
        borderBottomWidth: 4,
        borderBottomColor: variables.primary,
      },

})