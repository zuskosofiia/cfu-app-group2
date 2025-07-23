import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import UcuScreen from "./screens/UcuScreen.js";
import ProfileScreen from "./screens/ProfileScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import InformationScreen from "./screens/InformationScreen.js";
import SettingsScreen from "./screens/SettingsScreen.js";
import StudentsucuScreen from "./screens/StudentsucuScreen.js";
import ContentSCreen from "./screens/ContentucuScreen.js";
import FeedbackScreen from "./screens/FeedbackScreen.js";





const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//Tabs we want to show aftetr a login
function MainTabs() {
  return(
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen}/>
      <Tab.Screen name='Add' component={AddnewScreen} />
      <Tab.Screen name='Profile' component={Profile}/>
      <Tab.Screen name='UcuScreen' component={UcuScreen}/>
      
    </Tab.Navigator>
  )
}

export default function App() {
 return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="UcuScreen">
      <Stack.Screen name="Login" component={LoginScreen} />
       {/* <Stack.Screen name="MainTabs" component={MainTabs} /> */}
       {/* <Stack.Screen name="Second" component={SecondScreen}/> */}
       <Stack.Screen name="Profile" component={ProfileScreen}/>
       <Stack.Screen name="UcuScreen" component={UcuScreen}/>
       <Stack.Screen name="Information" component={InformationScreen}/>
       <Stack.Screen name="Studentsucu" component={StudentsucuScreen}/>
       <Stack.Screen name="Content" component={ContentSCreen}/>
       <Stack.Screen name="Feedback" component={FeedbackScreen}/>

      
     </Stack.Navigator>
   </NavigationContainer>
 );
}
