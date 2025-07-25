import { useNavigation } from '@react-navigation/native';
import {View, Text, StyleSheet, TouchableOpacity, Image,TextInput} from 'react-native';
import { useState } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function AddnewScreen() {
    const [feedback, setfeedback] = useState("");
    const navigation =useNavigation();
  return(
    <View style={styles.container}>
      <Image 
        style={styles.logoimage}
        source={require('../assets/logo-image.png')}
    />
    <Text style={styles.addnew}>Add new</Text>
    <TouchableOpacity>
      <MaterialIcons name="add-a-photo" size={90} color="black" marginLeft='70%' marginTop='10%'   onPress ={() => navigation.navigate("AddpostScreen")}  />
    </TouchableOpacity>
    <TextInput
       style={styles.feedbackinput}
       value={feedback}
       multiline={true}
       onChangeText={setfeedback}
       placeholder={"Enter your feedback"}
    />
    <TouchableOpacity style={styles.postbut}>
        <Text style={styles.postbutton}>Post</Text>
    </TouchableOpacity>
    </View> 
  )
}

const styles = StyleSheet.create({
    container:{
    backgroundColor:'#fff',
    marginTop: '-6%',
    height: '106%',
    },
    postbutton:{
      backgroundColor:'#4B9F3A' ,
      height:50,
      width:150,
      borderRadius:30,  
      textAlign:'center',
      padding:'15',
      marginLeft:'60%',
      marginTop:'10%',
    },
    logoimage:{
   resizeMode:"contain",
   marginLeft:'80%',
   marginTop:'3%',
   height: 75,
   width: 75,
   },
   addnew:{
   textAlign:'center',
   fontSize:30,
   },
   feedbackinput:{
    borderRadius:10,
    marginTop:'10%',
    marginLeft:'13%',
    backgroundColor:'lightgray',
    width:300,
    height:200,
    alignItems: "center",
    textAlignVertical:"top"
   },
   postbut: {
    marginRight: "9%",
   },
  }
)
