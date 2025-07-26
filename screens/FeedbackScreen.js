import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, TextInput, TouchableOpacity } from 'react-native';
import {useState} from 'react';


// add any other feedbacks to this array


export function Feedbacks({feedbacks}) {
    return (
        <FlatList data={feedbacks}
        scrollEnabled={false}
        renderItem={
            ({item, index}) => (
                <View>
                    <View style={styles.feedbackcontainer}>
                        <Image style={{ borderColor: index % 2 == 0 ? '#317B22' : '#671414', borderWidth: 4, width: 60, height: 60, borderRadius: 60, margin: 20 }} source={require("../assets/profile.jpg")} />
                        <Text style={styles.maintext2}> {item.nickname} </Text>
                    </View>
                    
                    <View style={index % 2 == 0 ? styles.textcontainer : styles.textcontainer2}>
                        <Text style={styles.text}> {item.feedback} </Text>
                    </View>
                </View>
            )
        }>

        </FlatList>
    )
}




 
export default function FeedbackScreen() {
    const [feedback, setFeedback] = useState("");
    const [allFeedbacks, setAllFeedbacks] = useState([
        {nickname: "Liza", feedback: "The academic quality at the university is outstanding. The professors are knowledgeable and genuinely care about students' success"},
        {nickname: "Sofia", feedback: "The campus is beautiful and well-maintained. It’s a peaceful and inspiring place to study and hang out with friends."},
        {nickname: "Anna", feedback: "The university offers career support, but it could be more proactive. More job fairs, internships, and resume workshops would be appreciated"},
        {nickname: "Taisa", feedback: "Important information like deadline changes or policy updates isn’t always communicated clearly. Better transparency from departments would be helpful"},
    ]);
    const navigation = useNavigation();

    function sendFeedback() {
        if (feedback.trim() === "") return;
        setAllFeedbacks(prev => [...prev, {nickname: "You", feedback}]);
        setFeedback("");
    }
  
    return (
            <View style={styles.mainContainer}>
                <ScrollView>
                        <View style={styles.container}>
                            <Image style={{resizeMode:"contain", height:75, width:75, position: 'absolute', right: 0,}} source={require("../assets/logo-image.png")} />
                            <Text style={styles.maintext}>FeedBack</Text>
                        </View>
                        <TextInput
                            style={styles.feedbackinput}
                            value={feedback}
                            multiline={true}
                            onChangeText={setFeedback}
                            placeholder={"Enter your feedback"}
                            />
                            <TouchableOpacity style={styles.sendbut} onPress={sendFeedback}>
                                <Text style={styles.textbut}>Send</Text>
                            </TouchableOpacity>

                        <Feedbacks feedbacks={allFeedbacks}></Feedbacks>
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
        paddingTop: '10%',
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
feedbackinput:{
    borderRadius:20,
    marginTop:'10%',
    marginLeft:'13%',
    backgroundColor:'lightgray',
    width:300,
    height:200,
    alignItems: "center",
    textAlignVertical:"center", 
    padding: 10,
    textAlign: 'center',
},
sendbut: {
    alignItems: 'center',
    backgroundColor:'#4B9F3A',
    height:50,
    width:100,
    borderRadius:30,  
    justifyContent:'center',
    marginLeft: '70%',

},

});