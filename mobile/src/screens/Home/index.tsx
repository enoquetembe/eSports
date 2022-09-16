/*
*Import components
 */
import React from "react";
import {View, Image, FlatList} from "react-native"
import { GameCard } from "../../components/GameCard";
import { Heading } from "../../components/Heading";
import { GAMES } from "../../utils/games";
import {styles} from './styles'

/*
*Home Component
*Returns a View with Home Componets 
*/
export const Home = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/logo-nlw-esports.png')}
                style={styles.logo}
            />

            <Heading
                title="Find your duo"
                subtitle="select the game you want to play..."
             />
             
            <FlatList
                data={GAMES}
                keyExtractor={item => item.id}
                renderItem={({item}) =>  <GameCard
                    data={item }
                 /> }
                 horizontal 
                 showsHorizontalScrollIndicator={false}
                 contentContainerStyle={styles.contentList }
            />

            
             
        </View>
    )
}