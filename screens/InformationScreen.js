import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

export default function InformationScreen() {
    const navigation = useNavigation();
    const route = useRoute()
    const uniInstance = route.params.uni

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-image.png')} />
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Entypo name="arrow-long-left" color="black" top="40" size={30} paddingRight='270' />
            </TouchableOpacity>

            <Image style={styles.photos} source={uniInstance.uniURI} />
            <ScrollView style={styles.textcon}>
                <Text style={styles.heading}>{uniInstance.uniName}</Text>
                <Text style={styles.textinfo}>{uniInstance.uniInformation}</Text>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textcon: {
        marginTop: '10%',
        flex: 1
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3A6B35',
        textAlign: 'center',
        marginBottom: 15,
    },

    textinfo: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 12,
        color: '#333',

    },
    logo: {
        width: 75,
        height: 75,
        marginTop: '10%',
        resizeMode: 'contain',
        position: 'absolute',
        top: -40,
        right: 10,
        // marginBottom: 80,
        // marginLeft:300,

    },
    photos: {
        height: '20%',
        width: '100%',
        marginTop: '20%',
        margin: '3%',

    },
    uniInformation: {
        flex: 1
    }
})