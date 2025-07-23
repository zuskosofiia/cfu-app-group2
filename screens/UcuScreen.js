import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function UcuScreen () {

  const navigation = useNavigation()

    return(
        <View style={{ flex: 1 }}>
          <ScrollView style={styles.scrollcontainer}>
              {/* <StatusBar style="auto" /> */}
              <Text style={styles.paragraph}>
                  Український Католицький Університет 
              </Text>
              <Image style={styles.photoucu} source={require('../assets/ucu.png')}/>
              <TouchableOpacity onPress ={() => navigation.navigate("")} style={styles.botton1}>
                <Image source={require('../assets/book-icon.png')}/>
                <Text style={styles.textbotton}> Information </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress ={() => navigation.navigate("")} style={styles.botton1}>
                <Image source={require('../assets/cap-icon.png')}/>
                <Text style={styles.textbotton}> Students </Text>
              </TouchableOpacity>


              <TouchableOpacity onPress ={() => navigation.navigate("")} style={styles.botton1}>
                <Image source={require('../assets/camera-icon.png')}/>
                <Text style={styles.textbotton}> Content </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress ={() => navigation.navigate("")} style={styles.botton1}>
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
    // backgroundColor: '#F6F1DE',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  paragraph: {
    color: 'black',
    fontWeight: 'Steclo',
    alignSelf: 'center',
    margin: 15,
  },
  photoucu: {
    margin: 15,
    height: 130,
    width: 130,
    // sizeMode: 'contain',
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 3,



  },
  botton1: {
    // height: '40%',
    paddingVertical: 10,
    width: '90%',
    backgroundColor: '#4B9F3A',
    margin: 20,
    borderRadius: 20,
    alignItems: "center",
    // justifyContent: "center",
    flexDirection: "row",
    paddingLeft: 35,
    gap: 10,

  },
  textbotton: {
    color: 'white',
    // fontWeight: 'Steclo',
    alignSelf: 'center',
    // margin: 15,
    fontSize: 36, 


  },
  bookicon: {
    

  },

});
