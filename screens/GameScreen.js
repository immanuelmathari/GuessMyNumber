import { StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";

function generateRandomBetween(min, max, exclude) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    
    if(randomNumber === exclude)
    {
        return generateRandomBetween(min, max, exclude);
    } else {
        return randomNumber;
    }
}

function GameScreen({userNumber})
{
    // {props} you use props.userNumber
    const initialGuess = generateRandomBetween(1,100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    return (
        <View style={styles.screen}>
            {/* <Text style={styles.title}>
                Opponent's Guess
            </Text> */}
            <Title>
                Opponent's Guess
            </Title>
            {/* GUESS */}
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
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
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.accent500,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: 12,
    },
});