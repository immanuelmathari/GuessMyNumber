import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

function StartGameScreen()
{
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText)
    {
        setEnteredNumber(enteredText);
    }

    function confirmInputHandler()
    {
        // we want to allow numbers within range on 1 and 99
    }


    return <View style={styles.inputContainer}>
        <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false} value={enteredNumber} onChangeText={numberInputHandler}/>
        <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>

            <PrimaryButton>
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
        // this is react specific
        // the higher the number from 1 the more shadow added
        elevation: 8,
        // for ios
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