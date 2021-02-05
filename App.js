import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import StockCGScreen from './screens/StockCGScreen';
import SBMMScreen from './screens/SBMMScreen';

const Drawer = createDrawerNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{ 
          title: 'Stock carte graphique' 
        }}>
        <Drawer.Screen 
          name="Home" 
          component={StockCGScreen} />
        <Drawer.Screen name="SBMM" component={SBMMScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;