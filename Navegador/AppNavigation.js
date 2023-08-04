import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import Ejercicio1Screen from '../Screens/Ejercicio1Screen.js'
import Ejercicio2Screen from '../Screens/Ejercicio2Screen.js'


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Ejercicio1Tab">
      <Tab.Screen
        name="Ejercicio1Tab"
        component={Ejercicio1Screen}
        options={{
          tabBarLabel: "Ejercicio1",
          headerTitle: "Toggle Screen",
          headerStyle:{backgroundColor:"#0000ff78"},
          headerTintColor:"white",

          tabBarIcon: () => <Ionicons name="library" size={30} color="#4b4efb" />,
        }}
      />
      <Tab.Screen
        name="Ejercicio2Tab"
        component={Ejercicio2Screen}
        options={{
          tabBarLabel: "Ejercicio2",
          headerTitle: "Carrito de Compras",
          headerStyle:{backgroundColor:"#0000ff78"},
          headerTintColor:"white",

          tabBarIcon: () => <Ionicons name="cart" size={30} color="#4b4efb" />,
        }}
      />
      
      
    </Tab.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
