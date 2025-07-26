import { View, Text, StyleSheet, TouchableOpacity, Switch, SafeAreaView, useColorScheme } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import {useState} from 'react';

export default function SettingsScreen({ navigation }) {
    const [isNotificationEnabled, setNotificationEnabled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleSignOut = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
    }; 

    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.topBar}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name="arrow-long-left" size={24} color="black" paddingTop="25" />
                </TouchableOpacity>
                <Text style={styles.title}>Settings</Text>
            </View>


            <View style={styles.settingRow}>
                <Text style={styles.text}>Notification</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#3A6B35" }}
                    thumbColor={"#f4f3f4"}
                    onValueChange={() => setNotificationEnabled(previousState => !previousState)}
                    value={isNotificationEnabled}
                />
            </View>


            <View style={styles.settingRow}>
                <Text style={styles.text}>Dark Mode</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#3A6B35" }}
                    thumbColor={"#f4f3f4"}
                    onValueChange={() => setIsDarkMode(!isDarkMode)}
                    value={isDarkMode}
                />
            </View>


            <TouchableOpacity 
                style={styles.settingRow} 
                onPress={() => navigation.navigate('HelpScreen')}>
                  <Text style={styles.text}>Help & Support</Text>
                  <Entypo name="chevron-right" size={24} color="#333" />
            </TouchableOpacity>


            <TouchableOpacity 
                style={styles.settingRow}
                onPress={() => navigation.navigate('PrivacyScreen')}>
                  <Text style={styles.text}>Privacy & Security</Text>
                  <Entypo name="chevron-right" size={24} color="#333" />
            </TouchableOpacity>


            <TouchableOpacity 
              style={styles.settingRow} 
              onPress={handleSignOut}>
                <Text style={styles.text}>Sign out</Text>
                <Entypo name="chevron-right" size={24} color="#333" />
            </TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff', 
        padding: 20,
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
        paddingHorizontal: 10,
        paddingTop: 20,

},
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 70,
        paddingTop: 20,
    },
    settingRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#EAEAEA',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 15,
    },
    text: {
        fontSize: 18,
        color: 'black',
    },
});