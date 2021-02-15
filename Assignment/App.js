import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Dashboard from "./Pages/Dashboard/dashboard"
import PeoplePage from "./Pages/PeoplePage"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render() {
    return (

      <Navigator />

    );
  }
}



const MainNavigator = createStackNavigator({
  
  Dashboard: Dashboard,
  PeoplePage:PeoplePage


},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },

  },
  {
    initialRouteName: 'Dashboard'
  }
);

export default App
const Navigator = createAppContainer(MainNavigator);


