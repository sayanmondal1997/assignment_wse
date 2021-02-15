import React, { Component } from 'react'
import { Text, View, DrawerLayoutAndroid, StyleSheet, ScrollView} from 'react-native'
import { variables} from "../../globalStyles"
import LowerNav from '../LowerNav'
import BodyPart from './BodyPart'
import LeftDrawer from './LeftDrawer'

export default class Drawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeNav: 3,
            isOpen: false
        }
        this.drawer = React.createRef()
    }



    activeNav = (id) => {
        this.setState({
            activeNav: id
        })
    }

    drawerHandle = (type) => {
        console.log("sayan check",type);
        
        this.setState({
            drawerType: type
        }, () => {
            this.drawer.current.openDrawer()
        })
    }

     

    render() {

        const leftNavigationView = (<ScrollView contentContainerStyle={{ backgroundColor: variables.primary, height: variables.height }}>
            <LeftDrawer />
        </ScrollView>)

        return (
            <>

                <DrawerLayoutAndroid drawerWidth={variables.width / 1.33}
                    ref={this.drawer}
                    drawerPosition={this.state.drawerType}
                    renderNavigationView={() => leftNavigationView}
                >
                    <>
                        <View >
                            <BodyPart  navigation={this.props.navigation} drawerHandle={(e) => this.drawerHandle(e)} openModal={() => this.setState({ isOpen: true })} activeNav={this.state.activeNav} activeSubHeader={(e)=>this.activeSubHeader(e)} />
                        </View>

                        <View style={styles.lowerNav}>
                            <LowerNav activeNav={(id) => this.activeNav(id)} />
                        </View>


                    </>

                </DrawerLayoutAndroid>

               

            </>

        )
    }
}


const styles = StyleSheet.create({
 
    lowerNav: {
        position: "absolute",
        bottom: 0
    },


})