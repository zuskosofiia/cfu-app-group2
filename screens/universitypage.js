import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function UniversityPage () {
    return(
        <View style={StyleSheet.container}>
            <StatusBar style="auto" />
            <Text style={styles.paragraph}>
                Український Католицький Університет 
            </Text>
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

  }

});