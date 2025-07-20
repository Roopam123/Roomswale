// AppWellcome.tsx
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from './AppWellcome.Styles';
import { useNavigation } from '@react-navigation/native';

const AppWellcome = () => {
  const navigation: any = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('IntroOne');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Wellcome</Text>
    </View>
  );
};

export default AppWellcome;
