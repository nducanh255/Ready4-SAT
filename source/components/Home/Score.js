import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ProgressBar from './ProgressBar'

export default function Score(){
    return(
        <View style={styles.contatiner}>
            <View style={styles.scoreContainer}>
                <Text style={{color: 'white', fontSize: 15}}>Estimated Score</Text>
                <View style={styles.score}>
                    <Text style={{fontSize: 60, color: 'white'}}>900</Text>
                    <View style={styles.skill}>
                        <Text style={{color: 'white', fontSize: 24}}>400</Text>
                        <Text style={{color: 'white', fontSize: 12}}>R&W</Text>
                    </View>
                    <View style={styles.skill}>
                        <Text style={{color: 'white', fontSize: 24}}>400</Text>
                        <Text style={{color: 'white', fontSize: 12}}>Math</Text>
                    </View>
                </View>
            </View>
            <View style={styles.progressBarContainer}>
                <Text style={{color: 'white'}}>80%</Text>
                <ProgressBar percent='80%'/>
            </View>   
        </View>
    )
}

const styles = StyleSheet.create({
    contatiner: {
        height: 150,
        backgroundColor: 'blue',
    },
    scoreContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    score: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    skill: {
        height: '60%',
        marginLeft: 10,
        paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftColor: 'white',
        borderLeftWidth: 1
    },
    progressBarContainer: {
        paddingBottom: 10,
        paddingHorizontal: 5
    }
})