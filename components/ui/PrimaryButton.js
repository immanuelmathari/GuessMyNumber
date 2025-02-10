import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

// function PrimaryButton(props)
function PrimaryButton({children, onPress})
{
    // function pressHandler()
    // {
    //     // console.log('you pressed me!')
    //     onPress();
    // }
    return (
        <View style={styles.buttonOuterContainer}>
{/* <Pressable onPress={pressHandler} android_ripple={{color: '#640233'}} style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}> */}
{/* we foward the value we receive from onPress to the pressable's onPress */}
<Pressable onPress={onPress} android_ripple={{color: Colors.primary600}} style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}>
        <Text style={styles.buttonText}>
            {/* {props.children} */}
            {children}
        </Text>
    </Pressable>
    </View>
    )
    
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden', // clips effects that go outside this container
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75, // 75 pc obaque 25 pc transparent
    }
})