import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { ThemedText, ThemedView } from '../../components/Themed';
import { HelloWave } from '../../components/HelloWave';

const HomeTab = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to PetMe!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Find Your Perfect Pet</ThemedText>
        <ThemedText>
          Explore our wide selection of pets and find your new best friend.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Connect with Experts</ThemedText>
        <ThemedText>
          Get advice from veterinarians, breeders, and pet care specialists.
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 20,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 20,
  },
});

export default HomeTab;
