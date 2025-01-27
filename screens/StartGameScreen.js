import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen()
{
    return <View style={styles.inputContainer}>
        <TextInput />
            <PrimaryButton>
                Reset
            </PrimaryButton>
            <PrimaryButton>
                Confirm
            </PrimaryButton>
    </View>
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1, // ensure the element it is on takes up as much as it can.
        padding: 16,
        marginTop: 100,
        backgroundColor: '#72063c'
    }
})

export default StartGameScreen;