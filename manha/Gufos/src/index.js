import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import CategoriasScreen from './pages/categorias';
import MainScreen from './pages/main';
import ProfileScreen from './pages/profile';
import SignInScreen from './pages/signin';

const AuthStack = createStackNavigator({
  Sign: { screen: SignInScreen },
});

const MainNavigator = createBottomTabNavigator(
  {
    Main: {
      screen: MainScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
    Categorias: {
      screen: CategoriasScreen,
    },
  },
  {
    initialRouteName:'Profile',
    tabBarOptions:{
      showIcon: true,
      showLabel: false,
      inactiveBackgroundColor: '#B727FF',
      activeBackgroundColor:'#9900e6',
      style: {
        width: '100%',
        height: 50,
      },
    },
  },
);

export default createAppContainer(createSwitchNavigator(
  {
    MainNavigator,
    AuthStack
  },
  {
    initialRouteName: 'AuthStack',
  },
),
);
