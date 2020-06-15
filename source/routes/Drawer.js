import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeStack from './HomeStack'

const Drawer = createDrawerNavigator()

export default function Navigator() {
    return(
        <NavigationContainer >
          <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeStack} />
          </Drawer.Navigator>
        </NavigationContainer>
    )
}