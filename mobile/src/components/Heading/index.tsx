/*
*Importing compnents 
*/
import React from "react";
import {View, Text, ViewProps} from "react-native"
import {styles} from './styles'

/*
*Interface with defaults properties for de View 
* Extends View properties
*/
interface Props extends ViewProps {
    title: string;
    subtitle: string;
}


/*
*Heanding component
* Returns a view with view components
 */
export const Heading= ({title, subtitle, ...rest}: Props) => {
    return (
        <View style={styles.container} {...rest}>
            
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>

        </View>
    )
}    