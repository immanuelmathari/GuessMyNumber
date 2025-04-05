27.01.25
> npx create-expo-app@latest --template blank GuessMyNumber
- we want to ensure no number is smaller than 1 and more than 99
- we want to allow the user to reset the input and pick a new number
- restart the game
- every guess is logged and we can see it
- game over screen when the phone guesses the number

- we create a folder screens
- these are components that will take the entire of the screen
- init, we create StartGameScreen.js file
- then, GameScreen.js - guesses from the phone then we let it know if its too high or too low
- then GameOverScreen.js
- we start with StartGameScreen

4.49
Creating Custom Buttons
- we create a component
components/PrimaryButton.js
- we accept props because we will be giving the title from somewhere else. title of the button

4.50
Styling for Android & IOS
- remember flex 1 makes it fit all available space, while without it it takes up only what it needs
- elevation is a react native android only property. 

4.51
Styling the number input element
- maxlength on textinput sets the number of characters
- in textInput, you have keyboardType prop
- autoCapitalized makes it not capital
- autoCorrect turns on and off autocorrection

4.53
Adding Visual Feedback to the buttons
- we need to add a component that allows us to react to taps or touchs
- we would use the touch, but pressable is better. pressable has a function onPress not onClick
- android ripple allows you to have feedback. its a wave effect. you use an object to set a color
- remember that as it was it is like this
return <Pressable onPress={pressHandler} android_ripple={{color: '#640233'}}>
    <View style={styles.container}>
        <Text style={styles.buttonText}>
            {/* {props.children} */}
            {children}
        </Text>
    </View>
    </Pressable>


export default PrimaryButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#72063c',
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        margin: 4,
        elevation: 2
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    }
})
- but we find that the ripple is outside the button, so what we need to do is to move the view outside the pressable component
- we need a container for the view and the pressable is another container that holds the text
- when building custom buttons, you need to work with multiple containers
- pressable's style can be a function that can be called whenever the button is pressed. and it takes in a prop that is an object about one property so you can even destructure it
- you can also pass array of style objects

4.54
Improving the buttons
- there was something here noteworthy. some
function StartGameScreen()
{
    return <View style={styles.inputContainer}>
        <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false} />
        <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>

            <PrimaryButton>
                Reset.
            </PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>

            <PrimaryButton>
                Confirm
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
        backgroundColor: '#4e0329',
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
look at how there is a view for each button and a view for all. this is to allow each button to utilize the space it can and can only do that with that inner view

4.55
Coloring the Components & the overall app
- background
- background image
- gradient

- views only take up as much space as they need to fit their content manu.
- but flex 1 makes it take up as much space as available

4.56
Adding a linear Gradient
expo linear gradient
> expo install expo-linear-gradient
- we want to have a gradient background color
- we use LinearGradient in app and use the color property and add your colors 

4.57 Adding a Background Image
- overlaying an image above the gradient but below other elements we use ImageBackground. it renders images in the background not the foreground
- use unslash for images
 if say we are in app.js and we have a folder in the same directory assets. we just ./ not ../ this is moving one step up
- ImageBackground has another propery resizeMode
- we make the image quite transparent so that the gradient shimmers through the image. we use imageStyle

4.58 Getting started with the Game Logic
- startGameScreen
- have the value at the number input and a function to note when it changes numberInputHandler
- we need confirmInputHandler to validate the input entered
- we need to allow button, primaryButton to take in a prop

4.59 Handling user input and showing an alert dialog
StartGameScreen.js confirmInputHandler()
- this function validates the number once the button is pressed and if not valid, we want to show an alert
- react native has an alert component
- is an object with a method we can call to show the alert message
- from this point we want to go to the next game screen

10.02.25|Mon|Week 7
4.60 Switching Screens Programmatically
GameScreen.js
- we want to display this screen once a user passess the StartGameScreen.js
- we want a state to keep track of if we have a number or not. once we do, we switch screen
in App.js
- so we make it in such a way that we can switch depending on if we have a number 
- this is the way we accept the prop
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />
so now we need to pass it from StartGameScreen

4.61 Starting Work on the Game Screen
- to tell if the number is too high or too low

4.62 Respecting Device Screen Restrictions with the SafeAreaView
- we use SafeAreaView. 
- we import it and wrap it in app

4.63 Creating a Title Component for global reusability for the Text component
@GameScreen.js
- we want to have a single place for the some things we will reuse
we add a new file Title.js and we cut the <Text> with its style and take to this component that we can globally reuse

4.64 Managing colors Globally
- we add a folder constants/colors.js
- so instead of doing this everytime,
android_ripple={{color: '#640233'}} 
we do this
color: Colors.primary600

4.65 Creating, Using & Displaying Random Numbers
- we write a fn to generate random numbers from GameScreen.js
- we generate a random number, then we multiply it with the difference between max and min to translate this random number between 0 and 1 to a random number between max and min and we use math.floor to round this down because this calculation gives us a decimal number and then we add our minimum number so that the lowest number we can get is not 0 because math random can produce 0 
- remember that in math.random, the upper boundary is excluded. so we go one value above our number
- the excluded number is what the user chose
- so we pass a prop to GameScreen
- we want to have a folder for game related components

14.02.25|Fri 
17.02.25|Mon
4.66 Adding Game Control Buttons to the App + and -
- in game screen, we bring our custom buttons. remember we had created customButton calling it PrimaryButton.
- remember that we can add the onPress prop to the custom Button of a function we can call.
- so we create a function nextGuessHandler
this function takes a parameter of if the nextNumber should be less or greater. init, if direction is lower, we do something, we want to set the minima of the generateRandomNumber. how can we get that number?. 
- we use variables that can be set to be static and cant change if state changes
- listen to 66 at 5min in
- so in nextGuessHandler, we need to give it a prop but we need to do it dynamically. so we use bind. when we want to preconfigure a function that will be called somewhere else, we use bind method. we can preconfigure that parameter that will be used
- so now we need to consider our choice in this generation
- note that alert can carry a text, style and onPress. Note it also has a title and a description

4.67 Checking for Game Over
GameScreen.js
- comparing numbers to see if the guessedNumber is the userNumber
- we use useEffect - allows you to write logic for when state changes
App.js
- we want to trigger GameOver in app.js in GameScreen
GameScreen.js
- look at the number of dependancies in the useEffect
- ati useEffect only executes after the function is done. 

4.68 Improving the Game Screen Visuals by creating custom components for components that are being used and styled similarly like text
StartGameScreen.js
- we add a property for the titles
ui/Card.js
- we were learning for a repetitive component like a card, you can create a reusable component and wrap it in whatever you want to use it
- we use this card on the StartGameScreen and the GameScreen
ui/InstructionText.js
- we do a similar thing 
- so basically, where there was Text in the screens, we made a component just for them so that we dont keep on redoing the styles

4.69 17/02 Using Cascading Syles. adding style from a third party components
GameScreen.js
- remember to style a button, we have to still wrap them in a view
- to add props in a custom component, we use props
InstructionText.js
- then we wrap the style in an array
- items are evaluated from left to right. so the ones on the right can overwrite the ones on the left

4.70 Working with Icons (Button Icons) 17/02 eg Ionicons
- we can use icons from expo eg Ionicons.
- this one you have to import it yourself 
- you can find them on expo documentations
https://icons.expo.fyi/Index
- remember to use filter
https://docs.expo.dev/guides/icons/

4.71 Adding & Using Custom Fonts with React Native Apps
app.js 18/02
GameOverScreen.js
- you want to load fonts as soon as possible
> expo install expo-font
- in App, we install useFonts from expo-font
- in assets, we add fonts
- the fonts init are loaded by useFonts
to show splash screen or loading screen
> expo install expo-app-loading
- we use AppLoading 
Title.js

4.72 Adding a (Foreground) Image 18/02

4.73 Using & Styling Nested Text 18/02
GameOverScreen.js
- we can wrap a text in a text but never a view in a text
- unlike how we have been saying, parent Text style like fontsize can affect child text elements
- we want a button to restart the game

4.74 Adding logic to Restart Games & Displaying a Summery Screen 18/02
- in the gameoverscreen, we need to get some props. so we accept them
App.js - we provide the props
- in app, we add a state guessRounds
in GameScreen, 
because we set the minNumber and maxNumber out of the function, we need to use a useEffect to reset it with conditions being [] so that it can only execute once

4.75 Logging Game Rounds 18/02
GameScreen
- we add guessRounds state in GameScreen
- we could use FlatList too but its un necessary because our guesses wount be too much

4.76 Outputting Log Data With FlatList 18/02

4.77 Styling the Game Round Logs 18/02
game/GuessLogItem.js
- we want to show the number of the round and the actual guess of that round
- so, we'll render an instance of the GuessLogItem everytime we iterate over the flatList
GameScreen.js
- we can get the index from the ItemData

4.78 Finishing Touches 18/02
- App.js @ gameOverHandler
- we want to add the numberOfRounds at the gameOverHandler
- in GameScreen, at the useEffect, we pass the length of the guessRounds

20.02.25
80. Module Introduction
- we want to ensure responsiveness on multiple screens

5.81 Setting Dynamic Widths 20/02
- for example what we can do about the title is that we can set the maxWidth to 80pc and go to its parent component GameScreen and at the screen, alignItems center
- the difference between width and maxWidth is that width is always say 80% but maxWidth is upto 80% but it could be less if less space is needed.
- we can also set the width to say 300px but also set maxWidth so that if its not 300px, we use what is upto 80% of the width. so in bigger screens, we have greater width. in smaller screens, 300px is more than available pixel so we use 80%

5.82 Introducing the Dimensions API 20/02
- how could we make our components smaller in bigger screens?
numberContainer.js
- we want to reduce padding and margin if we are on a smaller screen, and we want to reduce fontSize if we are on a smaller screen. 
- we use Dimesions from react-native
- the Dimensions api allows us to get device width and height
- init, screen is everything including status bar, while window excludes status bar.
- we can even get the font that the user prefers to use
- i think this is the power of react native.
Card.js
- we want to reduce space between the guess and the card for + or -
- we reduce the gap on smaller devices but keep it the same in bigger devices

5.83 Adjusting Image Sizes with the Dimensions API 20/02
GameOverScreen.js
- we dont want to hard code sizes of width and height because we dont know on which device size our app will run on. @imageContainer
- we could set percentage values say on the width and height but you know that those values will be different because the width is not always the same as the height

5.84 Understanding Screen Orientation Problems 20/02
- we change orientation in app.json at the orientation from portrait to default or landscape
- but landscape brings problems like when you want to type and the keyboard pops up it hides everything else

5.85 Setting Sizes Dynamically (for different Orientations) 20/02
StartGameScreen
- we want to base the height to the available height. so that we dont have as much mt if we dont have that space
- but what happens when user switches orientation whilst using the app?
- the Dimensions is executed once. so if we adjust the screen orientation after starting the game, the code for Dimensions will not be executed again. so we dont want to use Dimensions API like this. we move that code to inside component function because it will be reexecuted. then we use react natives' hook useWindowDimensions
- we do it in the component function and we add it to the return view through nesting the styles.
- so we use this hook for dynamic sizes

5.86 Managing Screen Content With KeyboardAvoidingView 20/02
StartGameScreen.
- in ios, we somehow cant close the keyboard
- we use a component, KeyboardAvoidingView. 
- we wrap this into what we need to inputed. so it will be moved up
- there are styles for it. we use position and wrap it in a scroll view. we dont want flatlist because we dont have a dynamic list
- now when we tap somewhere else, it closes the keyboard

5. 87 Improving the Landscape Mode UI 20/02
- in landscape, our view doesnt get displayed well
GameScreen.js
- we want to listen to changes in dimensions. useWindowDimensions

5.88 Further Imporvements with useWindowDimensions 20/02
- we want to focus on GameOverScreen.
GameOverScreen
- we were fixing it to be scrollable and use dynamic height and width to set the image

5.89 Writing Platform-specific Code with the Platform API 20/02
- we want to adjust to platform. 
- say there are elements that should look different for different platforms
Title.js
- we simply want to remove border in ios and have it in android
- the Platform.select allows you to set different values for each platform
- we can even write platform specific files
- we name them like Title.android.js
- make sure not to have the .android or .ios on the imports

5.90 Styling the status bar
App.js