import { Alert, Dimensions, KeyboardAvoidingView, ScrollView, StyleSheet, TextInput, useWindowDimensions, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({onPickedNumber})
{
    const [enteredNumber, setEnteredNumber] = useState('');

    const { width, height } = useWindowDimensions(); // this is a hook that allows us to get the updated width and height of the screen 

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

    const marginTopDistance = height < 380 ? 30 : 100;


    return <ScrollView style={styles.screen}>
    {/* <KeyboardAvoidingView style={styles.screen} behavior="position" keyboardVerticalOffset={30}> */}
    <KeyboardAvoidingView style={styles.screen} behavior="position" >
    <View style={[ styles.rootContainer, { marginTop: marginTopDistance} ]}>
    <Title >Guess My Number</Title>
    <Card>
        <InstructionText>Enter a Number</InstructionText>
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
    </Card>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>

}

export default StartGameScreen;

// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        // marginTop: 100,
        // marginTop: deviceHeight < 380 ? 30 : 100,
        alignItems: 'center',
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        // flex: 1, // ensure the element it is on takes up as much as it can.
        padding: 16,
        marginTop: 36,
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
    // for styling the input
    numberInput: {
        height: 70,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500 ,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
    
})
