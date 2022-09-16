/*
*Importing components
 */

import { ImageBackground } from "react-native";
import {styles } from './styles';
import BackgroundImg from '../../assets/background-galaxy.png'

/*
*Interface with  
*/
interface Props {
    children: React.ReactNode
}


/*
*Background component 
*Returns a ImageBackground component 
*/
export const Background = ({children} : Props) => {
    return(
        <ImageBackground 
            source={BackgroundImg} 
            style={styles.container}
            defaultSource= {BackgroundImg}
        >

            {children}
        </ImageBackground>
    );
}
