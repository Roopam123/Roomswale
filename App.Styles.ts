import { StyleSheet } from "react-native";
import { Colors } from "./src/utils/constent";
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors?.primary || '#fff',
    },
})

export { styles };