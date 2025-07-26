import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
import {useRoute} from '@react-navigation/native';


export default function UcuScreen () {
const navigation = useNavigation();
const route = useRoute();
const uniInstance = route.params.uni;

return(
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.scrollcontainer}>
          <View style={styles.container}>
          <Image style={styles.logo} source={require('../assets/logo-image.png')} />
          </View>
          <View style={styles.topBar}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Entypo name="arrow-long-left"  color="black" top="-10" size='30' paddingLeft='15'/>
            </TouchableOpacity>
            </View>
          <Text style={styles.paragraph}>
              {uniInstance.uniName}
          </Text>
          <View style={styles.imageContainer}>
            <Image style={styles.photoucu} source={uniInstance.uniURI}/>
            <Image style={styles.logoucu} source={uniInstance.uniLogoURI}/>
          </View>
          <TouchableOpacity onPress ={() => navigation.navigate("Information", {uni: uniInstance})} style={styles.botton1}>
            <Image  style={styles.logoimages} source={require('../assets/book-icon.png')}/>
            <Text style={styles.textbotton}> Information </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress ={() => navigation.navigate("Studentsucu" )} style={styles.botton1}>
            <Image style={styles.logoimages}  source={require('../assets/cap-icon.png')}/>
            <Text style={styles.textbotton}> Students </Text>
          </TouchableOpacity>


          <TouchableOpacity onPress ={() => navigation.navigate("Content")} style={styles.botton1}>
            <Image  style={styles.logoimages} source={require('../assets/camera-icon.png')}/>
            <Text style={styles.textbotton}> Content </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress ={() => navigation.navigate("Feedback")} style={styles.botton1}>
            <Image  style={styles.logoimages} source={require('../assets/message-icon.png')}/>
            <Text style={styles.textbotton}> Feedback </Text>
          </TouchableOpacity>
        </ScrollView>
    </View>
    );
}



const styles = StyleSheet.create({
  scrollcontainer: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%',
    paddingTop: '15%',
  
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  paragraph: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
    marginLeft: 7,
    marginRight: 7,
    // padding: '5%',
  },
  photoucu: {
    margin: 15,
    height: 160,
    width: 160,
    // sizeMode: 'contain',
    borderRadius: 20,
    // borderColor: 'black',
    // borderWidth: 3,



  },
  botton1: {
    paddingVertical: 1,
    height: 50,
    width: '85%',
    backgroundColor: '#4B9F3A',
    marginVertical: 8,
    borderRadius: 15,
    alignItems: "center",
    alignSelf: 'center',
    flesDirection: 'row',
    justifyContent: "fles-start",
    justifyContent: 'center',
    flexDirection: "row",
    paddingHorizontal: 15,
    gap: 10,
    marginVertical: 10,

  },
  textbotton: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 18, 
    marginLeft: 8,


  },
  logoucu: {
    margin: 15,
    height: 150,
    width: 150,
    resizeMode: 'cover',
    borderRadius: 20,
    // borderColor: 'black',
    // borderWidth: 3,
    flexDirection: 'row',
    // margin:10,

  },

  imageContainer: {
    flexDirection: 'row'
  },
   logo: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
    position: 'absolute',
    top: -40,
    right: 10, 
    // marginBottom: 80,
    // marginLeft:300,
    
  },
  logoimages: {
    width: 24,
    height: 24,
    resizeMode: 'contain', 
  },

});
