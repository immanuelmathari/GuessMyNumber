import { Dimensions, StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

function Card({children})
{
    return (
        <View style={styles.card}>
            {children}
        </View>
    )
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        // flex: 1, // ensure the element it is on takes up as much as it can.
        padding: 16,
        marginTop: deviceWidth < 380 ? 18 : 36,
        backgroundColor: Colors.primary800,
        marginHorizontal: 24,
        borderRadius: 8,
        // to add a shadow
        // this is reactnative, android specific
        // the higher the number from 1 the more shadow added
        elevation: 8,
        // for ios are the four below
        shadowColor: 'black',
        // the pixels which the shadow will be offset. and where. like the shadow positioning
        shadowOffset: {width:0, height:2},
        shadowRadius: 6,
        // to make a shadow quite transparent
        shadowOpacity: 0.25,
    },
});