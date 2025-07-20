import { Colors, Fonts } from '../../../utils/constent';
import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        justifyContent: "center",
        alignItems: 'center',
        paddingBottom: height * 0.12,
    },
    text: {
        color: '#fff',
        fontSize: 37,
        fontFamily: Fonts.Bold,
        fontWeight: "700"
    },
});
