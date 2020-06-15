import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function ProgressBar(props){
    return(
        <View style={{
            height: 8,
            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 4,
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <View style={{
                backgroundColor: 'orange',
                width: props.percent,
                height: 6,
                borderRadius: 3
            }}>
            </View>
        </View>
    )
}
