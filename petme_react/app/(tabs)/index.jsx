import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export default function Index() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.navigate('HomeScreen');
  }, [navigation]);

  return null;
}
