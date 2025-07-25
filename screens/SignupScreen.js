import { useNavigation } from '@react-navigation/native';
import {View, Text, StyleSheet, TouchableOpacity, Image,TextInput} from 'react-native';
import { useState } from 'react';


export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[name,setName] = useState("");
    const navigation = useNavigation ();
    const handlePress = () => navigation.navigate("MainTabs", { screen: 'Home', params: { name: email } });

  return(
    <View style={styles.mainContainer}>
      <View style={styles.container}>
           <Image 
              style={styles.logoimage}
              source={require('../assets/logo-image.png')}/>
        <TouchableOpacity onPress ={() => navigation.navigate("Login")}  style={styles.buttonsignup} >
            <Text style={styles.signup}>Log in</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signemail}>
        <Text style={styles.signtext}>Sign up</Text>
        <TextInput
        style={styles.emailinput}
        value={email}
        onChangeText={setEmail}
        placeholder={"Email"}
      />
      <View>
        <TextInput
        style={styles.emailinput}
        value={name}
        onChangeText={setName}
        placeholder={"Name"}
      />
      <TextInput
        style={styles.emailinput}
        value={password}
        onChangeText={setPassword}
        placeholder={"Password"}
      />
      
      </View>
      </View>
      <View style={styles.signupbut}>
        <TouchableOpacity style={styles.buttonlogin} onPress={(handlePress)} >
        <Text style={styles.signup}>Sign up </Text>
      </TouchableOpacity>
      </View>
      
      
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#fff",
        // marginTop: '10%',
        height: '100%',
    },
    container:{
    // backgroundColor:'#F6F1DE',
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  emailinput:{
    marginTop:40,
    backgroundColor:'lightgray',
    width:300,
    height: 50,
    borderRadius: '2%',
    paddingHorizontal: 10,
    fontSize: 16,
    alignItems: "center",
    

  },
  signupbut:{
    // position: 'relative',
    alignItems: 'center',
  },
   buttonlogin:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#4B9F3A' ,
    height:50,
    width:200,
    padding: 10,
    borderRadius:30,  


    alignContent: 'center',
    justifyContent:'center',

 },

  signemail:{
    flexDirection:'column',
    alignItems: "center",
    padding:100, 
  },

  signup: {
     fontFamily: 'Intern',
     color: 'white',
     padding: 10,
     textAlign: 'center',

    
    


  },

  buttonsignup:{
    backgroundColor: '#6e9f3aff',
    height: 50,
    weight: 50,
    marginRight:20,
    borderRadius:30,
    marginTop:15,
  },

  signup:{
    fontFamily:'Intern',
    color: 'white',
    padding:18,
    textAlign: 'center',
  },

  logoimage:{
   resizeMode:"contain",
   height: 75,
   width: 75,
 },

 login:{
    marginTop:80,
    fontSize:45,
    marginLeft:130,
    fontWeight:'bold',
 },

 signtext:{
    fontWeight:'bold',
    fontSize:22,
    padding: 3,
    width: 120
 },

})
