import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import Ionicons from '@expo/vector-icons/Ionicons';
import GameLogItem from "../components/game/GameLogItem";
 
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
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(() => {
        if (currentGuess === userNumber) {
            // tell app that the game is over
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver])

    useEffect(() => {
        minNumber = 1;
        maxNumber = 100;
    }, []); 


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
        setGuessRounds((prevGuessRounds) => [newNumber, ...prevGuessRounds])
    }

    const guessRoundListLength = guessRounds.length;

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
            <Card>
                {/* to tell if the guess was too high or too low */}
                <InstructionText style={styles.instructionText}>Higher or lower</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>

                <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                    <Ionicons name="remove-sharp" size={24} color="white" />
                </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>

                <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                    <Ionicons name="add" size={24} color="white" />
                </PrimaryButton>
                    </View>
                </View>
                {/* + - */}
            </Card>
            <View style={styles.listContainer}>
                {/* {guessRounds.map((guessRound) => {
                    return (
                        // this is because its never repeated the guessRound because of our functionality
                        <Text key={guessRound}>{guessRound}</Text>
                    )
                })} */}
                {/* itemData is passed by react native */}
                {/* flatlist adds a key for us */}
                {/* but if we know it cant find like in our case, we use the KeyExtractor */}
                {/* we basically tell react native to use our data as the key */}
                {/* <FlatList data={guessRounds} renderItem={(itemData) => <Text>{itemData.item}</Text>} keyExtractor={(item) => item} /> */}
                {/* <FlatList data={guessRounds} renderItem={(itemData) => <GameLogItem roundNumber={itemData.index}  />} keyExtractor={(item) => item} /> */}
                <FlatList data={guessRounds} renderItem={(itemData) => <GameLogItem roundNumber={guessRoundListLength - itemData.index} guess={itemData.item}  />} keyExtractor={(item) => item} />
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
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
    instructionText: {
        marginBottom: 12,
    },
    listContainer: {
        flex: 1,
        padding: 16,
    }
});