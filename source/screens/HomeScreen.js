import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Score from '../components/Home/Score'

export default function HomeScreen({navigation}){
    return(
        <View>
            <Score />
            <View style={styles.subHeader}>
                <TouchableOpacity onPress={() => navigation.navigate('Schools')}>
                    <Text>Schools</Text>    
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Test')}>
                    <Text>Test</Text>    
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Vocab')}>
                    <Text>Vocab</Text>    
                </TouchableOpacity>
            </View>
            <View style={{backgroundColor: 'yellow', height: '100%'}}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    subHeader: {
        height: 40,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
})