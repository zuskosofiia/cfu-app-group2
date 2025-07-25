import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Button } from 'react-native';

export default function UcuScreen () {

  const navigation = useNavigation()

    return(
        <View style={{ flex: 1 }}>
          <ScrollView style={styles.scrollcontainer}>
              {/* <StatusBar style="auto" /> */}
              <Text style={styles.paragraph}>
                  Ukrainian Catholic University 
              </Text>
              <View style={styles.imageContainer}>
                <Image style={styles.photoucu} source={require('../assets/ucu.png')}/>
                <Image style={styles.logoucu} source={require('../assets/logoucu.png')}/>
              </View>
              <TouchableOpacity onPress ={() => navigation.navigate("Information")} style={styles.botton1}>
                <Image source={require('../assets/book-icon.png')}/>
                <Text style={styles.textbotton}> Information </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress ={() => navigation.navigate("Studentsucu")} style={styles.botton1}>
                <Image source={require('../assets/cap-icon.png')}/>
                <Text style={styles.textbotton}> Students </Text>
              </TouchableOpacity>


              <TouchableOpacity onPress ={() => navigation.navigate("Content")} style={styles.botton1}>
                <Image source={require('../assets/camera-icon.png')}/>
                <Text style={styles.textbotton}> Content </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress ={() => navigation.navigate("Feedback")} style={styles.botton1}>
                <Image source={require('../assets/message-icon.png')}/>
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
  
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  paragraph: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 15,
    padding: '5%',
  },
  photoucu: {
    margin: 15,
    height: 150,
    width: 150,
    // sizeMode: 'contain',
    borderRadius: 20,
    // borderColor: 'black',
    // borderWidth: 3,



  },
  botton1: {
    paddingVertical: 5,
    width: '90%',
    backgroundColor: '#4B9F3A',
    marginVertical: 10,
    borderRadius: 20,
    alignItems: "center",
    alignSelf: 'center',
    flesDirection: 'row',
    justifyContent: "fles-start",
    justifyContent: 'center',
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 12,

  },
  textbotton: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 22, 


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
  }

});
