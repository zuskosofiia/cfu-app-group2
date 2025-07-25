import React from 'react';
import {StyleSheet,Text,View,SafeAreaView,TouchableOpacity,ScrollView,ImageBackground,} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.title}>Home</Text>
        <TouchableOpacity  onPress ={() => navigation.navigate("Chats")}>
          <Ionicons name="chatbubble" size={30} color="#3A6B35"/>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.searchBar}
        onPress={() => navigation.navigate('Search')}
      >
        <Text style={styles.searchText}>Search</Text>
        <Ionicons name="search" size={20} color="#3A6B35" />
      </TouchableOpacity>



      <ScrollView style={styles.scrollView}>


        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => navigation.navigate('UcuScreen')}>
          <ImageBackground
            source={require('../assets/ucu.png')}
            style={styles.imageBackground}
            imageStyle={{ borderRadius: 15 }}>
            <View style={styles.overlay}>
              <Text style={styles.cardText}>Ukrainian Catholic University (UCU)</Text>
              <Ionicons name="arrow-forward" size={24} color="white" style={styles.arrowIcon} />
            </View>
          </ImageBackground>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => navigation.navigate('UcuScreen')}>
          <ImageBackground
            source={require('../assets/kpi.png')}
            style={styles.imageBackground}
            imageStyle={{ borderRadius: 15 }}>
            <View style={styles.overlay}>
              <Text style={styles.cardText}>National Technical University of Ukraine "Igor Sikorsky Kyiv Polytechnic Institute"</Text>
              <Ionicons name="arrow-forward" size={24} color="white" style={styles.arrowIcon} />
            </View>
          </ImageBackground>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => navigation.navigate('UcuScreen')}>
          <ImageBackground
            source={require('../assets/knu.png')}
            style={styles.imageBackground}
            imageStyle={{ borderRadius: 15 }}>
            <View style={styles.overlay}>
              <Text style={styles.cardText}>Taras Shevchenko National University of Kyiv</Text>
              <Ionicons name="arrow-forward" size={24} color="white" style={styles.arrowIcon} />
            </View>
          </ImageBackground>
        </TouchableOpacity>

          <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => navigation.navigate('UcuScreen')}>
          <ImageBackground
            source={require('../assets/lnu.png')}
            style={styles.imageBackground}
            imageStyle={{ borderRadius: 15 }}>
            <View style={styles.overlay}>
              <Text style={styles.cardText}>Ivan Franko National University of Lviv</Text>
              <Ionicons name="arrow-forward" size={24} color="white" style={styles.arrowIcon} />
            </View>
          </ImageBackground>
        </TouchableOpacity>


          <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => navigation.navigate('UcuScreen')}>
          <ImageBackground
            source={require('../assets/hnu.png')}
            style={styles.imageBackground}
            imageStyle={{ borderRadius: 15 }}>
            <View style={styles.overlay}>
              <Text style={styles.cardText}>V. N. Karazin Kharkiv National University</Text>
              <Ionicons name="arrow-forward" size={24} color="white" style={styles.arrowIcon} />
            </View>
          </ImageBackground>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => navigation.navigate('UcuScreen')}>
          <ImageBackground source={require('../assets/ukma.png')}
            style={styles.imageBackground}
            imageStyle={{ borderRadius: 15 }}>
            <View style={styles.overlay}>
              <Text style={styles.cardText}>National University of Kyiv-Mohyla Academy</Text>
              <Ionicons name="arrow-forward" size={24} color="white" style={styles.arrowIcon} />
            </View>
          </ImageBackground>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => navigation.navigate('UcuScreen')}>
          <ImageBackground
            source={require('../assets/nmu.png')}
            style={styles.imageBackground}
            imageStyle={{ borderRadius: 15 }}>
            <View style={styles.overlay}>
              <Text style={styles.cardText}>Bogomolets National Medical University</Text>
              <Ionicons name="arrow-forward" size={24} color="white" style={styles.arrowIcon} />
            </View>
          </ImageBackground>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => navigation.navigate('UcuScreen')}>
          <ImageBackground
            source={require('../assets/lp.png')}
            style={styles.imageBackground}
            imageStyle={{ borderRadius: 15 }}>
            <View style={styles.overlay}>
              <Text style={styles.cardText}>Lviv Polytechnic National University</Text>
              <Ionicons name="arrow-forward" size={24} color="white" style={styles.arrowIcon} />
            </View>
          </ImageBackground>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => navigation.navigate('UcuScreen')}>
          <ImageBackground
            source={require('../assets/hpi.png')}
            style={styles.imageBackground}
            imageStyle={{ borderRadius: 15 }}>
            <View style={styles.overlay}>
              <Text style={styles.cardText}>National Technical University "Kharkiv Polytechnic Institute"</Text>
              <Ionicons name="arrow-forward" size={24} color="white" style={styles.arrowIcon} />
            </View>
          </ImageBackground>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => navigation.navigate('UcuScreen')}>
          <ImageBackground
            source={require('../assets/onu.png')}
            style={styles.imageBackground}
            imageStyle={{ borderRadius: 15 }}>
            <View style={styles.overlay}>
              <Text style={styles.cardText}>I. I. Mechnikov Odesa National University</Text>
              <Ionicons name="arrow-forward" size={24} color="white" style={styles.arrowIcon} />
            </View>
          </ImageBackground>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => navigation.navigate('UcuScreen')}>
          <ImageBackground
            source={require('../assets/dnu.png')}
            style={styles.imageBackground}
            imageStyle={{ borderRadius: 15 }}>
            <View style={styles.overlay}>
              <Text style={styles.cardText}>Oles Honchar Dnipro National University</Text>
              <Ionicons name="arrow-forward" size={24} color="white" style={styles.arrowIcon} />
            </View>
          </ImageBackground>
        </TouchableOpacity>



      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  searchBar: {
    backgroundColor: '#dbe7e7',
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginHorizontal: 20,
    marginTop:20,
  },
  searchText: {
    fontSize: 16,
    color: '#555',
  },
  scrollView: {
    marginTop: 20
  },
  cardContainer: {
    marginHorizontal: 20,
    marginBottom: 15, 
  },
  imageBackground: {
    height: 120,
    justifyContent: 'center',
    marginHorizontal: 20,
    marginBottom: 15, 
  },
  overlay: {
    flex: 1,
    backgroundColor: '#3A6B3566',
    borderRadius: 15,
    padding: 15,
    width: '100%'
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  arrowIcon: {
    position: 'absolute',
    bottom: 10,
    right: 15,
  },
});