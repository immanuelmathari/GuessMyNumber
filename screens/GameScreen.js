import { StyleSheet, Text, View } from "react-native";

function GameScreen()
{
    return (
        <View style={styles.screen}>
            <Text>
                Opponent's Guess
            </Text>
            {/* GUESS */}
            <View>
                {/* to tell if the guess was too high or too low */}
                <Text>Higher or lower</Text>
                {/* + - */}
            </View>
            <View>
                {/* LOG ROUNDS */}
            </View>
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1, // take all available space
        padding: 40,
    }
});