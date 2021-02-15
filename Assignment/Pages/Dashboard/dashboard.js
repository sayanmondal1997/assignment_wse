import React, { Component } from 'react'
import { View } from 'react-native'
import { globalStyles, variables } from "../../globalStyles"
import Drawer from "../../Components/Drawer/Drawer"

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    
      }
    render() {
        return (
            <View style={globalStyles.container}>

                <Drawer navigation={this.props.navigation} />
              
              
            </View>
        )
    }
}

export default Dashboard;