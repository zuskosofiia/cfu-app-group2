import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';


const photoURI = [
  require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
  require("../assets/ucu.png"),
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
  require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
  require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
  require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
]


export default function AddPostScreen() {
  const [imgPath, setImgPath] = useState(require('../assets/graybackground.webp'))

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-image.png')} />

      <View style={styles.skeletonInput}>
        <Text style={styles.text}>Add post</Text>
        <Image style={styles.grayimage} source={imgPath} />

      </View>
      <Text style={styles.recents}>Recents</Text>


      <FlatList
        data={photoURI}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setImgPath(item)}>
            <Image source={item} style={styles.image} />
          </TouchableOpacity>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    // paddingTop: 3,
    backgroundColor: '#fff',
    backgroundColor:'#fff',
    marginTop: -8, 
  },
  recents:{
    alignSelf: 'flex-start',
    marginLeft: 20, 
    marginBottom: 10,
    fontSize: 16,
    fontweight: '200',

  },
  logo: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
    marginBottom: 80,
    marginLeft:300,
  },
  skeletonInput: {
    width: '90%',
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  text: {
    marginTop: -60,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  grayimage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 8,
    resizeMode: 'cover',
  },
});
