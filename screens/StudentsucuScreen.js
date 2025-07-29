import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';



const photosURI = [
 { name: "Diana", photo: require("../assets/dianka.jpg")},
  {name: "Denis", photo: require("../assets/denis.jpg")},
  {name: "Anna", photo: require("../assets/anna.jpg")},
  {name: "Maria", photo: require("../assets/bohachenko.jpg")},
  {name: "Bohdan", photo: require("../assets/bohdan.jpg")},
  {name: "Ostap", photo: require("../assets/ostap.jpg")},
 { name: "Maria", photo: require("../assets/halyshko.jpg")},
  {name: "Sofiia", photo: require("../assets/sofiia.jpg")},
  {name: "Lika", photo: require("../assets/lika.jpg")},
 { name: "Rostik", photo:require("../assets/rostik.jpg")},
]

export function PhotoGrid({students}) {
    const navigation = useNavigation()
  return (
    <FlatList data={students}
    numColumns={2}
    renderItem={
      ({item}) => (
        <TouchableOpacity  onPress ={() => navigation.navigate("StudentProfiles")} >
            <View style={styles.studentBox}>
                <Image source={item.photo} style={styles.image} />
                <View style={styles.studentInfo}>
                    <Text style = {{textAlign: 'center'}}>{item.name}</Text>
                </View>
            
            </View>
        </TouchableOpacity>
      )
    }
    columnWrapperStyle={styles.row}>

    </FlatList>
  )
}

 
export default function StudentsScreen() {
    const navigation = useNavigation()
  return (
    <ScrollView style={styles.mainContainer}>
        <View style={styles.container}>
            <Text style={styles.maintext}> Students </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Entypo name="arrow-long-left"  color="black" top="-10" size={30} paddingLeft='15'/>
        </TouchableOpacity>
        <View style={styles.imagesContainer}>
                <PhotoGrid students={photosURI}></PhotoGrid>
        </View>

       
    </ScrollView>
  )


}
const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "space-between",
    
  },
  maintext: {
    fontSize: 36,
    fontFamily: "Inter",
    marginTop: 40,
},
image:{ 
    borderColor: '#2E7D41', 
    borderWidth: 5, 
    width: 80, 
    height: 80, 
    borderRadius: 60, 
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: -20,
    zIndex: 100,
},
studentBox: {
 marginLeft: 25,
 marginRight: 25,
},
studentInfo: {
    backgroundColor: '#94CEA3',
    paddingTop: 50,
    paddingBottom: 50,
    borderRadius: 20,
    marginTop: 0,
    width: "100%",
},
imagesContainer:{
   alignItems: 'center',
   justifyContent:"center"
    

},
});