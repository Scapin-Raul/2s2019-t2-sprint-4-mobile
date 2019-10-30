import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';


import MainScreen from './pages/main';
import ProfileScreen from './pages/profile';
import SignInScreen from './pages/signin';

const AuthStack = createStackNavigator({
  Sign: {screen: SignInScreen}
})

const MainNavigator = createBottomTabNavigator({
    Main: {
      screen: MainScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
  },
  {
    initialRouteName:'Main',
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      inactiveBackgroundColor: '#eeeeee',
      activeBackgroundColor: '#dddddd',
    }

  }
  
);

// export default createAppContainer(MainNavigator);

export default createAppContainer(
  createSwitchNavigator(
    {
      MainNavigator,
      AuthStack
    },{
      initialRouteName : 'AuthStack',
    },
  )
);
