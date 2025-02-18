import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [userNumber, setUserNumber] = useState('');
  const [gameOver, setGameOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  // fontsLoaded is a boolean that shows whether the fonts have been loaded
  const [fontsLoaded] = useFonts({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if(!fontsLoaded)
  {
    return <AppLoading />
  }

  function pickedNumberHandler(pickedNumber)
  {
    setUserNumber(pickedNumber);
    setGameOver(false);
  }
  
  function startNewGameHandler()
  {
    // reset states
    setUserNumber(null); // though this we can go back to the start screen because the if conditions will not be met. well go to startgamescreen
    // setGameOver(true);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />


  if (userNumber) // if truthy, then we make it into if block but we initialized it as startGameScreen
  {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} /> // we can now use this gameover prop in the game screen
  }
  if(gameOver && userNumber) 
  {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler} />
  }

  function gameOverHandler()
  {
    setGameOver(true);
  }


  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/images/background.png')} resizeMode="cover" style={styles.rootScreen} imageStyle={styles.backgroundImage}>
      {/* <StartGameScreen />  */}
      <SafeAreaView style={styles.rootScreen}>
      {screen}
      </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.35,
  }
});
