import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function UcuScreen () {
    return(
        <View style={StyleSheet.container}>
            <StatusBar style="auto" />
            <Text style={styles.paragraph}>
                Український Католицький Університет 
            </Text>
            <Image style={styles.photoucu} source={require('../assets/ucu.png')}/>
        </View>
    );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F1DE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    color: 'black',
    fontWeight: 'Steclo',
    alignItems: 'center',
    margin: 15,
  },
  photoucu: {
    margin: 15,
        height: 130,
        width: 130,
        sizeMode: 'contain',
        borderRadius: 100,
        borderColor: 'black',
        borderWidth: 3,


  },

});
