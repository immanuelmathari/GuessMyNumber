import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

function StartGameScreen({onPickedNumber})
{
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText)
    {
        setEnteredNumber(enteredText);
    }

    // for reseting input
    function resetInputHandler()
    {
        setEnteredNumber('');
    }

    function confirmInputHandler()
    {
        // we want to allow numbers within range on 1 and 99
        // convert texttoint
        const chosenNumber = parseInt(enteredNumber);
        // returns true of the number is not a number
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99)
        {
            // show an alert
            // first is title, second is message third allows us to configure the buttons which will be part of the alert
            // the button is defined by adding an object
            Alert.alert('Invalid Number','Number has to be a number between 1 and 99', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
            // the onpress allows you to point to a function once the alert is triggered eg say to get rid of the invalid value
            return;
        }

        // console.log('valid number')
        onPickedNumber(chosenNumber);


    }


    return <View style={styles.inputContainer}>
        <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false} value={enteredNumber} onChangeText={numberInputHandler}/>
        <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>

            <PrimaryButton onPress={resetInputHandler}>
                Reset.
            </PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>

            <PrimaryButton onPress={confirmInputHandler}>
                Confirm.
            </PrimaryButton>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        // flex: 1, // ensure the element it is on takes up as much as it can.
        padding: 16,
        marginTop: 100,
        backgroundColor: '#3b021f',
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
    // for styling the input
    numberInput: {
        height: 70,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
})

export default StartGameScreen;