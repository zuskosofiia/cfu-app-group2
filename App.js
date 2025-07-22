import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image  } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <Image style={{borderColor : 'black',
            borderWidth: 5,
            width: 120,
            height: 120,
            borderBottomRightRadius: 60,
            borderBottomLeftRadius: 60,
            borderTopRightRadius: 60,
            borderTopLeftRadius: 60,
            margin: 30}}
            source={}
          
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
