// Splace.tsx
import React, { useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Splace.Styles';

const Splace = () => {
    const navigation: any = useNavigation();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigation.navigate('Wellcome');
        }, 3000);

        return () => clearTimeout(timeout);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#9c42a9" barStyle="light-content" />
        </View>
    );
};

export default Splace;
