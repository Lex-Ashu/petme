import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useColorScheme } from '../hooks/useColorScheme';
import { Colors } from '../constants/Colors';

type TextType = 'title' | 'subtitle' | 'default' | 'defaultSemiBold';

interface ThemedTextProps {
  type?: TextType;
  style?: object;
  children: React.ReactNode;
}

export const ThemedText = ({ type = 'default', style, children }: ThemedTextProps) => {
  const colorScheme = useColorScheme();
  const textStyles = [
    styles[type],
    { color: Colors[colorScheme ?? 'light'].text },
    style,
  ];

  return <Text style={textStyles}>{children}</Text>;
};

interface ThemedViewProps {
  style?: object;
  children: React.ReactNode;
}

export const ThemedView = ({ style, children }: ThemedViewProps) => {
  const colorScheme = useColorScheme();
  const viewStyles = [
    { backgroundColor: Colors[colorScheme ?? 'light'].background },
    style,
  ];

  return <View style={viewStyles}>{children}</View>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  default: {
    fontSize: 16,
  },
  defaultSemiBold: {
    fontSize: 16,
    fontWeight: '600',
  },
});
