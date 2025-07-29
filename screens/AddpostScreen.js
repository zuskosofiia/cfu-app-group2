import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';


const photoURI = [
  require("../assets/photouni1.png"),
  require("../assets/photouni2.png"),
  require("../assets/photouni3.png"),
  require("../assets/photouni4.png"),
  require("../assets/photouni5.png"),
  require("../assets/photouni6.png"),
  require("../assets/photouni7.png"),
  require("../assets/photouni8.png"),
  require("../assets/photouni9.png"),
  require("../assets/photouni10.png"),
  require("../assets/photouni11.png"),
  require("../assets/photouni12.png"),
  require("../assets/photouni13.png"),
  require("../assets/photouni14.png"),
  require("../assets/photouni15.png"),
]


export default function AddPostScreen() {
  const [imgPath, setImgPath] = useState(require('../assets/photouni1.png'))

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-image.png')} />
    <TouchableOpacity style={styles.postbut}>
      <Text style={styles.textbut}>Post</Text>
    </TouchableOpacity>
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
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
   
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
    alignSelf: 'flex-end',
   
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
  postbut: {
    alignItems: 'center',
    backgroundColor:'#4B9F3A' ,
    height:50,
    width:100,
    borderRadius:30,  
    justifyContent:'center',
    alignSelf: 'flex-end',
    marginVertical: 10,
    

  },
  textbut: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    },
});
