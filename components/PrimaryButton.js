import { Text, View } from "react-native";

// function PrimaryButton(props)
function PrimaryButton({children})
{
    return <View>
        <Text>
            {/* {props.children} */}
            {children}
        </Text>
    </View>
}

export default PrimaryButton;