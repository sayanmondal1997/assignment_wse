import React, { Component } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import Connects from '../Connects'
import Invitations from '../Invitations'
import SuggestPeople from '../SuggestPeople'
import Search from '../search'
import SubHeader from '../SubHeader'
import { variables } from "../../globalStyles"


class BodyPart extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };

    }

   
    render() {
        return (
            <>
               
                
                    <ScrollView stickyHeaderIndices={[1]} style={styles.scrollContainer}>
                         <Search leftDrawer={(e) => this.props.drawerHandle(e)} /> 
                         <SubHeader activeSubHeader={(e)=>this.props.activeSubHeader(e)}/>
                        <Invitations/>
                        <SuggestPeople  navigation={this.props.navigation}/>
                        <Connects/>
                           
                    </ScrollView>

                
                
            </>
        )
    }
}

export default BodyPart;

const styles = StyleSheet.create({

    scrollContainer: {
      height:variables.height/1.10,
      backgroundColor:"white"
      
    }
      
  })