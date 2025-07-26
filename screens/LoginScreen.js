
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';



export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
    const handlePress = () => navigation.navigate("MainTabs", { screen: 'Home', params: { name: email } });


    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Image
                    style={styles.logoimage}
                    source={require('../assets/logo-image.png')}
                />
                <TouchableOpacity onPress={() => navigation.navigate("Signup")} style={styles.buttonsignup} >
                    <Text style={styles.signup}>Sign up</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.signemail}>
                <Text style={styles.signtext}>Log in</Text>
                <TextInput
                    style={styles.emailinput}
                    value={email}
                    onChangeText={setEmail}
                    placeholder={"Email"}
                />
                <TextInput
                    style={styles.emailinput}
                    value={password}
                    onChangeText={setPassword} 
                    secureTextEntry
                    placeholder={"Password"}

                />
            </View>
            <View style={styles.signupbut}>
                <TouchableOpacity style={styles.buttonlogin} onPress={(handlePress)}>
                    <Text style={styles.signup}>Log in </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#fff',
        height: '100%',
        justifyContent: 'space-between',
        paddingTop: '10%',

    },
    container: {
        flexDirection: 'row',
        marginTop: '1%',
        justifyContent: 'space-between',
    },

    emailinput: {
    marginTop:40,
    backgroundColor:'lightgray',
    width:300,
    height: 50,
    borderRadius: '2%',
    paddingHorizontal: 10,
    fontSize: 16,
    alignItems: "center",


    },
    signupbut: {
        position: 'relative',
        alignItems: 'center',
        marginBottom: '20%'
    },
    buttonlogin: {

        backgroundColor: '#4B9F3A',
        height: 50,
        width: 200,
        borderRadius: 30,
        alignContent: 'center',
        justifyContent: 'center',
        marginBottom: 10,


        // alignContent: 'center',
        // justifyContent: 'center',

    },

    signemail: {
        flexDirection: 'column',
        alignItems: "center",
        padding: 15
    },

    signup: {
        padding: 10,
        alignItems: 'center',
    },

    buttonsignup: {
        backgroundColor: '#4B9F3A',
        height: 50,
        weight: 50,
        marginRight: 15,
        borderRadius: 30,
        marginTop: 15,
        justifyContent: 'center',
        alignContent: 'center',
    },

    signup: {
        fontFamily: 'Intern',
        color: 'white',
        padding: 10,
        textAlign: 'center',
    },

    logoimage: {
        resizeMode: "contain",
        height: 75,
        width: 75,
    },

    login: {
        marginTop: 80,
        fontSize: 45,
        marginLeft: 130,
        fontWeight: 'bold',
    },

    signtext: {
        fontWeight: 'bold',
        fontSize: 20,
        padding: 3,
    },

})
