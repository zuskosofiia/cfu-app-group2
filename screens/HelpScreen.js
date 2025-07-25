import {View, Text, StyleSheet} from "react-native"
export default function HelpScreen () {
    return (
        <View>
            <Text style={styles.title}>Help & Support</Text>
            <Text style={styles.text}>This app is made for students to honestly share their thoughts and experiences about universities, teachers, and study conditions. You can find and read real stories, reviews, and tips from other students—all in one place.

If you have any issues or need help using the app, check our FAQ for quick answers about posting, editing your profile, or using features. If you still have questions, contact our support team. We're here to make sure you have a smooth and helpful experience.</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff', 
        padding: 20,
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