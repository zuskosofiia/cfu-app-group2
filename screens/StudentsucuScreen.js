import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, FlatList, TouchableOpacity } from 'react-native';



const photosURI = [
  require("../assets/profile.jpg"),
  require("../assets/profile.jpg"),
  require("../assets/profile.jpg"),
  require("../assets/profile.jpg"),
  require("../assets/profile.jpg"),
  require("../assets/profile.jpg"),
  require("../assets/profile.jpg"),
  require("../assets/profile.jpg"),
  require("../assets/profile.jpg"),
]

export function PhotoGrid({students}) {
    const navigation = useNavigation()
  return (
    <FlatList data={students}
    numColumns={2}
    renderItem={
      ({item}) => (
        <TouchableOpacity  onPress ={() => navigation.navigate("Profile")} >
            <View style={styles.studentBox}>
                <Image source={item} style={styles.image} />
                <View style={styles.studentInfo}>
                    <Text style = {{textAlign: 'center'}}>Info</Text>
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
  return (
    <ScrollView>
        <View style={styles.container}>
            <Text style={styles.maintext}> Students </Text>
        </View>
        <View style={styles.imagesContainer}>
                <PhotoGrid students={photosURI}></PhotoGrid>
        </View>

       
    </ScrollView>
  )


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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