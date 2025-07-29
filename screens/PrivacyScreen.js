import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function PrivacyScreen () {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Privacy & Security</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Entypo name="arrow-long-left"  color="black" top="-30" size={30} paddingLeft='15'/>
            </TouchableOpacity>
            <Text style={styles.text}>Your privacy is important to us. You can make all your feedback and reviews anonymous so your personal information stays private. The app is designed to protect your identity and keep your information safe. We never share your data without your permission.

If you want to update or remove your info or have concerns about your privacy, you can easily do this from your profile settings. For any serious issues, please reach out to support.
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff', 
        paddingTop: 50,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 70,
        paddingTop: 20,
    },
     text: {
        fontSize: 15,
        color: 'black',
        padding: 25,
     },
});