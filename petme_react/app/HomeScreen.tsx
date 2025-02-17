import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Colors } from '../constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';

type RootStackParamList = {
  Home: undefined;
  VetConnect: undefined;
  BreedersConnect: undefined;
  StoreConnect: undefined;
  EmergencyConnect: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleNavigation = (screen: keyof RootStackParamList) => {
    navigation.navigate(screen);
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://i.gifer.com/7XlK.gif' }} // Clear animation of cats and dogs playing
      style={styles.backgroundImage}
      resizeMode="cover"
    >

      <View style={styles.container}>
        <Text style={styles.mainTitle}>Pet Me</Text>
        
        <View style={styles.header}>
          <View style={styles.searchContainer}>
            <MaterialIcons name="search" size={24} color={Colors.secondary} />
            <TextInput
              style={styles.searchBar}
              placeholder="Search..."
              placeholderTextColor={Colors.secondary}
            />
          </View>
          <TouchableOpacity style={styles.menuButton}>
            <MaterialIcons name="menu" size={28} color={Colors.secondary} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonGrid}>
          <TouchableOpacity 
            style={styles.blockButton}
            onPress={() => handleNavigation('VetConnect')}
          >
            <Image
              source={{ uri: 'https://img.icons8.com/color/96/000000/stethoscope.png' }}
              style={{ width: 48, height: 48 }}
            />
            <Text style={styles.blockTitle}>Vet Connect</Text>
            <Text style={styles.blockDescription}>Find professional veterinary care for your pet</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.blockButton}
            onPress={() => handleNavigation('BreedersConnect')}
          >
            <Image
              source={{ uri: 'https://img.icons8.com/color/96/000000/dog.png' }}
              style={{ width: 48, height: 48 }}
            />
            <Text style={styles.blockTitle}>Breeders Connect</Text>
            <Text style={styles.blockDescription}>Connect with trusted breeders for your new pet</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.blockButton}
            onPress={() => handleNavigation('StoreConnect')}
          >
            <Image
              source={{ uri: 'https://img.icons8.com/color/96/000000/shopping-cart.png' }}
              style={{ width: 48, height: 48 }}
            />
            <Text style={styles.blockTitle}>Store Connect</Text>
            <Text style={styles.blockDescription}>Shop for all your pet's needs</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.blockButton}
            onPress={() => handleNavigation('EmergencyConnect')}
          >
            <Image
              source={{ uri: 'https://img.icons8.com/color/96/000000/emergency-call.png' }}
              style={{ width: 48, height: 48 }}
            />
            <Text style={styles.blockTitle}>Emergency Connect</Text>
            <Text style={styles.blockDescription}>Get immediate help for pet emergencies</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    opacity: 0.8, // Make background slightly transparent
  },
  container: {
    flex: 1,
    padding: 20,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.secondary,
    textAlign: 'center',
    marginVertical: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginRight: 15,
  },
  searchBar: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    color: Colors.primary,
  },
  menuButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    borderRadius: 25,
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  blockButton: {
    width: '48%',
    borderRadius: 20,
    padding: 24,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    minHeight: 160,
  },
  blockTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.secondary,
    marginTop: 10,
    textAlign: 'center',
    textShadowColor: Colors.shadow,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  blockDescription: {
    fontSize: 14,
    color: Colors.secondary,
    marginTop: 8,
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default HomeScreen;
