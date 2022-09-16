import { View, ActivityIndicator } from 'react-native'
import {styles} from './styles'
import { THEME } from '../../theme'

/*
*Returns a View with the 
*/
export const Loading = () => {
    return(
        <View style={styles.container}>
            <ActivityIndicator color={THEME.COLORS.PRIMARY}/>
        </View>
    );
}
