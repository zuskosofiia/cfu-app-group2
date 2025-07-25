import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, FlatList, TouchableOpacity } from 'react-native';



const photosURI = [
  require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
  require ("../assets/queens-university-belfast-adobestock-525837958.jpg"),
  require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
  require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
  require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
  require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
  require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
  require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
  require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
  require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
  require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
  require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
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
  return (
   
        <View style={styles.container}>
                <Image style={{resizeMode:"contain", height:75, width:75, position: 'absolute', right: 0, top: 20}} source={require("../assets/logo-image.png")} />
                    
                <Text style={styles.maintext}> Content</Text>
            <View style={styles.imagesContainer}>
                <PhotoGrid photos={photosURI}></PhotoGrid>
            </View>   
        </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "space-between",
    height: '100%',
    paddingTop: 20,
  },
  maintext: {
    fontSize: 36,
    fontFamily: "Inter",
    marginTop: 40,
    

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
    height: 180,
    margin: 3,
  },

  imagesContainer:{
     flexDirection: "row",
     padding: 10
  },

});