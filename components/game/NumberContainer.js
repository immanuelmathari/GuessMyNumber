import { Dimensions, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({children}) {
    // here we expect to get the number that is to be outputted as a prop here.
    return <View style={styles.container}>
        <Text style={styles.numberText}>
            {children}
        </Text>
    </View>
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;
// const deviceHeight = 

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        // padding: 20,
        // we use conditional if
        padding: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        margin: deviceWidth < 380 ? 12 : 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: Colors.accent500,
        fontSize: deviceWidth < 380 ? 28 : 36,
        // fontWeight: 'bold',
        fontFamily: 'open-sans-bold',
    }
});