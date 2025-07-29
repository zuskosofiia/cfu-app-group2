import { React, useState } from 'react';
import {StyleSheet,FlatList, Text,View,SafeAreaView,TouchableOpacity,ScrollView,ImageBackground} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function Universities({unis, navigation}) {
  return (
    <FlatList data={unis}
    scrollEnabled={false}
    renderItem={
      ({item}) => (
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => navigation.navigate('UcuScreen', { uni: item })}>
          <ImageBackground
            source={item.uniURI}
            style={styles.imageBackground}
            imageStyle={{ borderRadius: 15 }}>
            <View style={styles.overlay}>
              <Text style={styles.cardText}>{item.uniName}</Text>
              <Ionicons name="arrow-forward" size={24} color="white" style={styles.arrowIcon} />
            </View>
          </ImageBackground>
        </TouchableOpacity>
      )
    }>

    </FlatList>
  )

}

export default function HomeScreen({ navigation }) {
  // Fill up this from the old code in the comment below
  const [allUnis, setAllUnis] = useState([
    {
      uniName: "Ukrainian Catholic University (UCU)",
      uniURI: require("../assets/ucu.png"),
      uniLogoURI: require("../assets/logoucu.png"),
      uniInformation: "Ukrainian Catholic University (UCU) is a private higher education institution located in Lviv. \n\n Established in 2002, UCU is the successor of the Lviv Theological Academy and has a unique philosophical and Christian orientation. The university is known for its emphasis on ethics, leadership, civic responsibility, and critical thinking. \n\n UCU includes faculties of humanities, applied sciences, social sciences, and theology. The campus is modern and open, featuring new academic buildings, a library, a student residence, and an innovation center. \n\n UCU actively cooperates with European and American universities. Special focus is placed on forming the next generation of leaders. It is one of the most dynamic universities in Ukraine.",
      uniContent: [
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
      ]
    },
    {
      uniName: "National University of Kyiv-Mohyla Academy",
      uniURI: require("../assets/ukma.png"),
      uniLogoURI: require("../assets/logoukma.png"),
      uniInformation: "The National University of Kyiv-Mohyla Academy (NaUKMA) is one of the oldest universities in Ukraine, located in central Kyiv. Founded in 1615, it was the first higher education institution in Eastern Europe modeled after European standards.  \n\n The modern Academy was reestablished in 1991 as an independent liberal arts and social sciences university. NaUKMA is distinguished by its interdisciplinary education, strong academic integrity policies, and instruction in English. The university offers robust programs in law, sociology, economics, cultural studies, and political science.   \n\n The academic process emphasizes an individual-centered approach and integration with the European educational space. The campus includes historical buildings that are architectural monuments. NaUKMA serves as a significant intellectual and cultural hub in Ukraine.",
      uniContent: [
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
      ]
    },
    {
      uniName: "National Technical University of Ukraine Igor Sikorsky Kyiv Politetechnic Institute",
      uniURI: require("../assets/kpi.png"),
      uniLogoURI: require("../assets/kpilogo.png"),
      uniInformation: "Igor Sikorsky Kyiv Polytechnic Institute (KPI) is one of the largest technical universities in Ukraine, located in Kyiv. Founded in 1898, the university has a long-standing tradition of training highly qualified engineers and scientists. It comprises over 30 academic and research institutes and faculties.\n\n KPI is actively involved in international cooperation, maintaining partnerships with universities in Europe and the United States. A key feature is its strong research infrastructure and innovation in IT, energy, and aviation sectors. The campus covers approximately 120 hectares and includes modern laboratories, dormitories, a library, and sports facilities.\n\n The university is named after Igor Sikorsky, a prominent aircraft designer. KPI consistently ranks among the top universities in Eastern Europe.",
      uniContent: [
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
      ]
    },
     {
      uniName: "Taras Schevchenko Nartional University of Kyiv",
      uniURI: require("../assets/knu.png"),
      uniLogoURI: require("../assets/logoknu.png"),
      uniInformation: "Taras Shevchenko National University of Kyiv is a leading classical university in Ukraine, located in the capital city of Kyiv. Established in 1834, it is one of the country's most prominent educational and research institutions. The university includes over 15 faculties and academic institutes. It has a well-developed research infrastructure and its own network of scientific institutions. \n\n The university is highly ranked internationally and maintains cooperation with prestigious global partners. Its campus comprises several buildings across Kyiv, including the historic main building on Volodymyrska Street. The university is named after Taras Shevchenko, Ukraine’s national poet. It provides education in a wide range of disciplines from the humanities to the natural sciences.",
      uniContent: [
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
      ]
    },
    {
      uniName: "Ivan Franko National University of Lviv",
      uniURI: require("../assets/lnu.png"),
      uniLogoURI: require("../assets/logolnu.png"),
      uniInformation: "Ivan Franko National University of Lviv is one of the oldest and most prestigious higher education institutions in Ukraine, located in the city of Lviv. Founded in 1661 as a Jesuit academy, it later evolved into a classical university. The institution includes over 20 faculties, such as philology, law, natural sciences, and philosophy. It is known for combining a strong humanistic tradition with modern scientific approaches. \n\n The university actively participates in international academic programs and collaborates with institutions across Europe and North America. The campus is located in the city center, and the main building is a historical architectural landmark. It is named after Ivan Franko, a prominent Ukrainian writer and thinker. The university plays a vital role in the cultural and academic life of Western Ukraine.",
      uniContent: [
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
      ]
    },
    {
      uniName: "V.N. Karazin Kharkiv National University",
      uniURI: require("../assets/hnu.png"),
      uniLogoURI: require("../assets/logohnu.png"),
      uniInformation: "V. N. Karazin Kharkiv National University is one of Ukraine's leading classical universities, located in Kharkiv. Established in 1804 on the initiative of Vasyl Karazin, it is among the oldest higher education institutions in the country. The university has a strong scientific foundation and comprises over 20 faculties. Its key academic areas include fundamental sciences, medicine, international relations, and the humanities. \n\n Karazin University actively engages in international cooperation and student exchange programs. It serves as a major center for academic research and intellectual life in Eastern Ukraine. \n\n The campus is located in the city center near Freedom Square. The university holds national status and is regularly featured in international rankings.",
      uniContent: [
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
      ]
    },
    {
      uniName: "Bogomolets National Medical University",
      uniURI: require("../assets/nmu.png"),
      uniLogoURI: require("../assets/logonmu.png"),
      uniInformation: "O.O. Bohomolets National Medical University is a leading higher medical education institution in Ukraine, located in Kyiv. Founded in 1841, it has a long tradition of training physicians, dentists, pharmacists, and health science researchers. The university comprises over 10 faculties, including medicine, dentistry, pharmacy, and foreign student training. \n\n It is equipped with modern laboratories, clinical facilities, and training centers. The university collaborates with top medical institutions in Ukraine and internationally. It is named after academician Oleksandr Bohomolets, a key figure in Ukrainian medical science. Special emphasis is placed on clinical practice and student research. The university serves as a hub for medical education and innovation in healthcare.",
      uniContent: [
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
      ]
    },
    {
      uniName: "Lviv Polytechnic National University",
      uniURI: require("../assets/lp.png"),
      uniLogoURI: require("../assets/logolp.png"),
      uniInformation: "Lviv Polytechnic National University is one of the oldest technical universities in Eastern Europe, located in Lviv. Founded in 1816 as a technical academy, it has a rich tradition of engineering education. Today the university comprises over 15 institutes and faculties, covering a wide range of engineering, IT, and economic disciplines. A key feature of Lviv Polytechnic is the integration of traditional engineering education with modern technologies.\n\n  The campus includes both historical and modern buildings, dormitories, laboratories, and conference centers. The university collaborates extensively with European technical institutions through Erasmus+ and Horizon programs. Students are actively engaged in project work, startups, and scientific research. The university plays a crucial role in the development of engineering education in Ukraine.",
      uniContent: [
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
      ]
    },
    {
      uniName: "National Technical University Kharkiv Polytechnic Institute",
      uniURI: require("../assets/hpi.png"),
      uniLogoURI: require("../assets/logohpi.png"),
      uniInformation: "National Technical University Kharkiv Polytechnic Institute is a leading technical university in Ukraine, located in Kharkiv. Founded in 1885, it is one of the oldest engineering institutions in the country. The university includes over 20 educational and research units, including faculties in energy, mechanical engineering, IT, and materials science. A distinctive feature is its practical orientation and strong engineering tradition.\n\n  The campus hosts laboratories, dormitories, sports complexes, and innovation centers. KhPI actively participates in international educational programs and technical development projects. It trains professionals for key industrial sectors. The institution holds national technical university status and is highly regarded by employers.",
      uniContent: [
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
      ]
    },
    {
      uniName: "I.I. Mechnikov Odesa National University",
      uniURI: require("../assets/onu.png"),
      uniLogoURI: require("../assets/logoonu.png"),
      uniInformation: "I.I. Mechnikov Odesa National University is a classical university located in the city of Odesa. Established in 1865, it is named after Nobel Prize laureate Ilya Mechnikov. The university has a multi-disciplinary structure, including over 10 faculties in natural, social, and human sciences. Special attention is given to research activities and cooperation with scientific institutions in Ukraine and Europe. \n\n The campus features historic buildings, libraries, and scientific laboratories. Due to its location, the university maintains strong ties with marine research centers. It trains professionals in biology, chemistry, physics, law, economics, and journalism. The university is a major educational center in Southern Ukraine.",
      uniContent: [
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
      ]
    },
    {
      uniName: "Oles Honchar Dnipro National",
      uniURI: require("../assets/dnu.png"),
      uniLogoURI: require("../assets/logodnu.png"),
      uniInformation: "Oles Honchar Dnipro National University is a multidisciplinary classical university located in the city of Dnipro. Established in 1918, it is one of the leading educational and scientific centers in the region. The university comprises over 15 faculties and institutes, including philology, physics, mathematics, biology, and economics. The campus is situated near the Dnipro River and offers modern infrastructure. The university actively integrates digital technologies into the learning process and supports student research. It is named after the Ukrainian writer Oles Honchar. \n\n A distinguishing feature is the combination of fundamental education with applied research. The university trains professionals for regional and national needs.",
      uniContent: [
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
        require("../assets/queens-university-belfast-adobestock-525837958.jpg"),
      ]
    }
  ])

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
      <Universities unis={allUnis} navigation={navigation}></Universities>
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