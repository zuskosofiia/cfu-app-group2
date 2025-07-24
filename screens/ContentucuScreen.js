import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import {Ionicons} from "@expo/vector-icons";

const photosURI = [
  require("../assets/queens-university-belfast-adobestock-525837958.jpeg"),
  require ("../assets/queens-university-belfast-adobestock-525837958.jpeg"),
  require("../assets/queens-university-belfast-adobestock-525837958.jpeg"),
  require("../assets/queens-university-belfast-adobestock-525837958.jpeg"),
  require("../assets/queens-university-belfast-adobestock-525837958.jpeg"),
  require("../assets/queens-university-belfast-adobestock-525837958.jpeg"),
]

export function PhotoGrid({photos}) {
  return (
    <FlatList data={photos}
    numColumns={3}
    renderItem={
      ({item}) => (
        <Image source={item} style={styles.image} />
      )
    }>

    </FlatList>
  )
}


export default function ProfileScreen() {
  const [myText, setMyText] = useState("");
  return (
    <ScrollView>
    <View style={styles.container}>
      <TouchableOpacity onPress={()=> NavigationActivation.navigate("Settings")}> <Ionicons name="settings-sharp" size={30} color = "#671414"  marginLeft={'73%'} marginTop={"2%"} /> </TouchableOpacity>
      <Image style={{ borderColor: '#671414', borderWidth: 5, width: 120, height: 120, borderRadius: 60, margin: 20 }} source={require("../assets/profile.png")} />
      <Text style={styles.text1}> Name </Text>

      <View style={{ flex:1, flexDirection: "row" }}>
        <Text style={{ backgroundColor: "#317B22", fontSize: 13, padding: 5, fontFamilly: "Inter", borderRadius: 20, marginLeft: 10 }}> Follow </Text>
        <Text style={styles.text}> Followers </Text>
        <Text style={styles.text}> Posts </Text>
      </View>

      <View style={{flex: 1, flexDirection: "row"}}>
        <Text style={styles.bioContainer}> bio</Text>
      </View>

      <TextInput style={styles.textInput} value={myText} onChangeText={setMyText} placeholder={"Share your bio here..."} />
      <View style={styles.imagesContainer}>
          <PhotoGrid photos={photosURI}></PhotoGrid>
      </View>

      </View>
    </ScrollView>
  )


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "top",
  },
  text: {
    fontSize: 13,
    fontFamily: "Inter",
    marginLeft: 20
  },
  text1: {
    fontSize: 14,
    fontFamily: "Inter",
    marginBottom: 20
  },
  textInput: {
    backgroundColor: "#90C585",
    borderRadius: 10,
    width: 250,
    margin: 20
  },

  bioContainer: {
    alignSelf: "flex-start",
  },

  image: {
    width: 115,
    height: 200,
    margin: 5,
  },

  imagesContainer:{
     flexDirection: "row",
  }
});


