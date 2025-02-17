import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState('');
  const [gameOver, setGameOver] = useState(true);

  function pickedNumberHandler(pickedNumber)
  {
    setUserNumber(pickedNumber);
    setGameOver(false);
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />

  if (userNumber) // if truthy, then we make it into if block but we initialized it as startGameScreen
  {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} /> // we can now use this gameover prop in the game screen
  }
  if(gameOver && userNumber) 
  {
    screen = <GameOverScreen />
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
