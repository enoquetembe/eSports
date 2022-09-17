import express, { request, response } from 'express'
import {PrismaClient} from '@prisma/client'
import cors from 'cors'
import { convertHourStringToMinnutes } from './utils/convert-hourString-to-minutes'
import { convertMinnutesToHourString } from './utils/convert-minutes-to-hourString'

const app = express()

app.use(express.json())
app.use(cors())

const prisma = new PrismaClient()

/*
*Route to list games
 */
app.get('/games', async (request, response)=> {
    // get games from prisma database.
    const games = await prisma.game.findMany({

        //including a counter for games ads
        include: {
            _count: {
                select: {
                    ads: true
                }
            }
        }
    })  
    
    //returns all games form the database
    return response.json(games)
}) 

/*
*Rout to create ads for the games
 */
app.post('/games/:id/ads', async (request, response) => {

    const gameId = request.params.id
    const body: any = request.body

    // creating ads
    const ad = await prisma.ad.create({
        data:{
            
            gameId,
            name: body.name, 
            discord: body.discord,
            weekDays: body.weekDays.join(','),
            useVoiceChannel: body.useVoiceChannel,
            yearsPlaying: body.yearsPlaying,
            hourStart: convertHourStringToMinnutes(body.hourStart),
            hourEnd: convertHourStringToMinnutes(body.hourEnd)
        }
    })
    
    return response.status(201).json(ad)
})


/*
*Route to list game ads 
*/
 app.get('/games/:id/ads', async (request, response) => {
    
    const gameId = request.params.id

    /*
    *select the game ads(id, name, weekDays, useVoiceChannel, yearsPlaying, hourStart, hourEnd)
    *where the gameId is the id of the game passed as a parameter and order by the date created desc 
    */
    const ads = await prisma.ad.findMany({

        select: {
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourStart: true,
            hourEnd: true,

        },
        
        where: {
            gameId: gameId

        },
        orderBy: {
            createdAt: 'desc',
        }
    })

    /*
    *Maping the ads to format weekDays and split by ','
     */
    return response.json(ads.map(ad => {
        return {
            ...ad,
            weekDays: ad.weekDays.split(','),
            hourStart: convertMinnutesToHourString(ad.hourStart),
            hourEnd: convertMinnutesToHourString(ad.hourEnd)
        }
    }))
 })

 /*
 * Route to list users discord 
 */
 app.get('/ads/:id/discord', async (request, response) => {
    const adId = request.params.id;


    /*
    *select the user dicord
    *where the aId is the id of the ad passed as a parameter  
    */
    const ad = await prisma.ad.findFirstOrThrow({
        
        select: {
            discord: true
        },
        
        where: {
           id: adId, 
        }
    })

    //returns discord as an object
    return response.json({
        discord: ad.discord,
    })
 })

 app.listen(8080);