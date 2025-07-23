import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { SafeAreaView } from 'react-native-web';

export default function MainPage() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
       <Button></Button>
       <Text styles= {styles.h1}>Home</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hi:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  }
});

