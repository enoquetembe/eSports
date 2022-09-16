/* Import Components */
import { Background } from './src/components/Background';
import { StatusBar } from 'react-native';
import {Loading} from './src/components/Loading';
import {Home} from './src/screens/Home'


/*Importing fonts from expo-google fonts lib */
import {useFonts,
        Inter_400Regular,
        Inter_600SemiBold, 
        Inter_700Bold, 
        Inter_900Black} 
        from '@expo-google-fonts/inter'

/**
 * Aplication component 
 */        
export default function App() {

  /*
  *Array with all fonts for the application.
  *Storing all fonts in the array for make sure that the fonts will be loaded
  */
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold, 
    Inter_700Bold, 
    Inter_900Black} )

  /*
  *Returns a Backgound component where all the aplication will be inolved 
  */
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded? <Home/> : <Loading/>}

    </Background>
  );
}


