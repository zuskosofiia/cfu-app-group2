import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, ScrollView, FlatList,  } from 'react-native';
//import{ Divider} from "react-native-paper";



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

 
export default function FeedbackScreen() {
  return (
    <View style={styles.mainContainer}>
        <ScrollView>

                <View style={styles.container}>
                    <Image style={{resizeMode:"contain", height:75, width:75, position: 'absolute', right: 0,}} source={require("../assets/logo-image.png")} />
                    
                    <Text style={styles.maintext}> FeedBack</Text>
                </View>

                <View style={styles.feedbackcontainer}>
                    <Image style={{ borderColor: '#317B22', borderWidth: 4, width: 60, height: 60, borderRadius: 60, margin: 20 }} source={require("../assets/profile.jpg")} />
                    <Text style={styles.maintext2}> Nickname </Text>
                </View>
                <View style={styles.textcontainer}>
                    <Text style={styles.text}> The academic quality at the university is outstanding. The professors are knowledgeable and genuinely care about students' success</Text>
                </View>

                <View style={styles.feedbackcontainer}>
                    <Image style={{ borderColor: '#671414', borderWidth: 4, width: 60, height: 60, borderRadius: 60, margin: 20 }} source={require("../assets/profile.jpg")} />
                    <Text style={styles.maintext2}> Nickname </Text>
                    
                </View>
                <View style={styles.textcontainer2}>
                    <Text style={styles.text}> The campus is beautiful and well-maintained. It’s a peaceful and inspiring place to study and hang out with friends.</Text>
                </View>
                <View style={styles.feedbackcontainer}>
                    <Image style={{ borderColor: '#317B22', borderWidth: 4, width: 60, height: 60, borderRadius: 60, margin: 20 }} source={require("../assets/profile.jpg")} />
                    <Text style={styles.maintext2}> Nickname </Text>
                </View>
                <View style={styles.textcontainer}>
                    <Text style={styles.text}> The university offers career support, but it could be more proactive. More job fairs, internships, and resume workshops would be appreciated</Text>
                </View>

                <View style={styles.feedbackcontainer}>
                    <Image style={{ borderColor: '#671414', borderWidth: 4, width: 60, height: 60, borderRadius: 60, margin: 20 }} source={require("../assets/profile.jpg")} />
                    <Text style={styles.maintext2}> Nickname </Text>
                    
                </View>
                <View style={styles.textcontainer2}>
                    <Text style={styles.text}>"Important information like deadline changes or policy updates isn’t always communicated clearly. Better transparency from departments would be helpful </Text>
                </View>
        
        </ScrollView>
     </View>
  )


}
const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#fff',
        height: '100%',
        justifyContent: 'space-between',
        flex: 1,
    },

  container: {
    flex: 1,
    // backgroundColor: '#F6F1DE',
    alignItems: 'center',
    justifyContent: "space-between",
    


  },
  textcontainer:{
    flex: 1,
    backgroundColor: '#C6DDC2',
    borderRadius: 20,
    marginLeft:25,
    marginRight:25,
    borderColor:"#317B22",
    borderWidth: 4
    
  },
    textcontainer2:{ 
    flex: 1,
    backgroundColor: '#FAE0E0',
    borderRadius: 20,
    marginLeft:25,
    marginRight:25,
     borderColor:"#671414",
    borderWidth: 4
    
  },
  feedbackcontainer:{
    flex: 1,
    backgroundColor: '#F7F1EC',
    alignItems: 'left',  
    flexDirection:"row",
    marginLeft:8,
    marginTop: 10,

  },
  maintext: {
    fontSize: 36,
    fontFamily: "Inter",
    marginTop: 40,
    

  },
  
   maintext2: {
    fontSize: 14,
    fontFamily: "Inter",
    marginTop: 40,},
text: { margin:10, },



 

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