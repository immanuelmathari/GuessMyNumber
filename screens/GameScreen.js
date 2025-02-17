import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    
    if(randomNumber === exclude)
    {
        return generateRandomBetween(min, max, exclude);
    } else {
        return randomNumber;
    }
}


    
let minNumber = 1;
let maxNumber = 100;


function GameScreen({userNumber, onGameOver})
{

    // {props} you use props.userNumber
    // const initialGuess = generateRandomBetween(minNumber,maxNumber, userNumber);
    // somehow we need to hardcode this
    const initialGuess = generateRandomBetween(1,100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if (currentGuess === userNumber) {
            // tell app that the game is over
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver])


    function nextGuessHandler(direction)
    {
        if((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber))
        {
            Alert.alert("Murife", 'Why are you lying?', [{ text: 'sorry!', style: 'cancel' }]);
            return;
        }

        if(direction === 'lower'){
            // you want to make it guess a number lower than what it guessed
            maxNumber = currentGuess;
            // generateRandomBetween(minNumber, maxNumber, currentGuess);
        } else {
            minNumber = currentGuess + 1;
            // generateRandomBetween(minNumber, maxNumber, currentGuess);
        }
        console.log(minNumber, maxNumber);
        const newNumber = generateRandomBetween(minNumber, maxNumber, currentGuess);
        setCurrentGuess(newNumber);
    }
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
                <View>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                </View>
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