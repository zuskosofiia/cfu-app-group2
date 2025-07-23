import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import UcuScreen from "./screens/UcuScreen.js";
import ProfileScreen from "./screens/ProfileScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import HomeScreen from "./screens/HomeScreen.js";
// import SettingsScreen from "./screens/SettingsScreen.js";
// import DetailsScreen from "./screens/DetailsScreen.js";
// import SecondScreen from "./screens/SecondScreen.js";



const Stack = createNativeStackNavigator();
const Tab =createBottomTabNavigator();

//Tabs we want to show aftetr a login
function MainTabs() {
  return(
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen}/>
      <Tab.Screen name='Add' component={AddnewScreen} />
      <Tab.Screen name='Profile' component={ProfileScreen}/>
      
    </Tab.Navigator>
  )
}

export default function App() {
 return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
       {/* <Stack.Screen name="MainTabs" component={MainTabs} /> */}
       {/* <Stack.Screen name="Second" component={SecondScreen}/> */}
       <Stack.Screen name="Profile" component={ProfileScreen}/>
      
     </Stack.Navigator>
   </NavigationContainer>
 );
}
