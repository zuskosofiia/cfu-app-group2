import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
export default function ChatsScreen(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Text style={styles.headertext}> Chats </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Entypo name="arrow-long-left"  color="black" top="-40" size={30} paddingRight='320'/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '1%',
        backgroundColor: '#fff',
        height: '100%',
            // paddingHorizontal: 20,
        padding: 60,
        alignItems: 'center',
        // justifyContent: 'center', 
    },

    headertext: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,

    },

})