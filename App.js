import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from '@expo/vector-icons/Ionicons';

import UcuScreen from "./screens/UcuScreen.js";
import ProfileScreen from "./screens/ProfileScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import SignupScreen from "./screens/SignupScreen.js";
import InformationScreen from "./screens/InformationScreen.js";
import SettingsScreen from "./screens/SettingsScreen.js";
import StudentsucuScreen from "./screens/StudentsucuScreen.js";
import ContentSCreen from "./screens/ContentucuScreen.js";
import FeedbackScreen from "./screens/FeedbackScreen.js";
import HomeScreen from "./screens/HomeScreen.js";
import AddnewScreen from "./screens/AddnewScreen.js";
import ChatsScreen from "./screens/ChatsScreen.js";
import HelpScreen from "./screens/HelpScreen.js";
import PrivacyScreen from "./screens/PrivacyScreen.js";
import AddpostScreen from "./screens/AddpostScreen.js";
import StudentProfiles from "./screens/StudentProfiles.js";


const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function MainTabs() {
  return (
      <Tabs.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'AddnewScreen') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color}/>
        },
        tabBarActiveTintColor: '#1e742cff',
        tabBarInactiveTintColor: 'black',
        tabBarActiveBackgroundColor: '#84d191ff',
        tabBarInactiveBackgroundColor: '#85af7cff',
      })}>
        <Tabs.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Home'}} />
        <Tabs.Screen name="AddnewScreen" component={AddnewScreen}  options={{ tabBarLabel: 'Add new'}}/>
        <Tabs.Screen name="Profile" component={ProfileScreen} options={{ tabBarLabel: 'Profile'}} />
      </Tabs.Navigator>
  );
}


export default function App() {
 return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="Login" screenOptions={({ route }) => ({ headerShown: false })} >
      <Stack.Screen name="Login" component={LoginScreen} />
       <Stack.Screen name="MainTabs" component={MainTabs} />
       <Stack.Screen name="Profile" component={ProfileScreen}/>
       <Stack.Screen name="UcuScreen" component={UcuScreen}/>
       <Stack.Screen name="Information" component={InformationScreen}/>
       <Stack.Screen name="Studentsucu" component={StudentsucuScreen}/>
       <Stack.Screen name="Content" component={ContentSCreen}/>
       <Stack.Screen name="Feedback" component={FeedbackScreen}/>
       <Stack.Screen name="Home" component={HomeScreen}/>
       <Stack.Screen name="Signup" component={SignupScreen}/>
       <Stack.Screen name="Chats" component={ChatsScreen}/>
       <Stack.Screen name="AddnewScreen" component={AddnewScreen}/>
       <Stack.Screen name="SettingsScreen" component={SettingsScreen}/>
       <Stack.Screen name="Settings" component={SettingsScreen}/>
       <Stack.Screen name="HelpScreen" component={HelpScreen}/>
       <Stack.Screen name="PrivacyScreen" component={PrivacyScreen}/> 
       <Stack.Screen name="AddpostScreen" component={AddpostScreen}/> 
       <Stack.Screen name="StudentProfiles" component={StudentProfiles}/> 
                          

     </Stack.Navigator>
   </NavigationContainer>
 );
}
