/*
* Importing things  
*/
import React from "react";
import {TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType, Text} from 'react-native'
import {styles} from './styles'
import { LinearGradient } from "expo-linear-gradient";
import { THEME } from "../../theme";


/*
*Interface for Game card 
* export to reuse when the GameCard  is called
*/
export interface GameCardProps {
    id: string;
    name: string;
    ads: string;
    cover: ImageSourcePropType; 
}

/*
* Interce to use only here 
* extends Toouchable properties to use all elements from TouchbaleOpacity 
*/
interface Props  extends TouchableOpacityProps{
    data: GameCardProps;
}


/*
* Game Card component
*receive a data from the Props interface as a parameter
* Returns a touchable component
*/
export const GameCard= ({data, ...rest}: Props) => {
    
    /*
    *Dynamically seting the styles and source for the ImageBackgoundComponet
    */
    return (
     <TouchableOpacity style={styles.container} {...rest}>
        
        <ImageBackground 
            style={styles.cover}
            source= {data.cover}
        > 

        <LinearGradient 
            colors={THEME.COLORS.FOOTER}
            style={styles.footer}
        >
            <Text style= {styles.name}>
                {data.name}
            </Text>

            <Text style= {styles.ads}>
                {data.ads} ads
            </Text>

        </LinearGradient>

        </ImageBackground>
     </TouchableOpacity>
    ) 
}      