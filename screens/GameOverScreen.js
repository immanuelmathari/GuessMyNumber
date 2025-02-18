import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

function GameOverScreen()
{
    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER</Title>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/images/success.png')} style={styles.image} />
            </View>
            <View>
                <Text>Your phone needed X rounds to guess the number Y.</Text>
            </View>
        </View>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    imageContainer: {
        borderRadius: 150,
        width: 300,
        height: 300,
        // this creates a cirlce. the width and height should be the same and the border radius should be half of the width and height
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    }
})