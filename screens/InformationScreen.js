import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import {useRoute} from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

export default function InformationScreen() {
    const navigation = useNavigation();
    const route = useRoute()
    const uniInstance = route.params.uni

    return (
    <ScrollView>
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-image.png')} />
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Entypo name="arrow-long-left"  color="black" top="-10" size='30' paddingLeft='15'/>
            </TouchableOpacity>
        <View style={styles.textcon}>
            <Text style={styles.textinfo}>{uniInstance.uniInformation}</Text>
        </View>
        </View>
    </ScrollView> 
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: '15%',
        margin: '5%',
        backgroundColor: '#fff',
        height: '100%',
    },
    textcon: {
        marginTop: '50%',
    },
    textinfo: {
    color: 'black',
    fontSize: 19,
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
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
})