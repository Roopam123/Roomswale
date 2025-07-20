import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../../utils/constent';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
    }
});
