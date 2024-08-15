import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import GlobalProider from '../context/GlobalProider'

const AuthLayout = () => {
  return (
   <GlobalProider>
   <Stack>
    <Stack.Screen 
    name='sign-in'
    options={{
      headerShown:false,
    }}
    />
    <Stack.Screen 
    name='sign-up'
    options={{
      headerShown:false,
    }}
    />
   </Stack>

   <StatusBar backgroundColor='#161622'
   style='light'/>
   </GlobalProider>
  )
}

export default AuthLayout