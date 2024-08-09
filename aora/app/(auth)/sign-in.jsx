import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import { Link } from 'expo-router'
import  FormField  from "../../components/FormField"


import {images} from "../../constants";
import CustomButton  from "../../components/CustomButton"

const SignIn = () => {

  const [form,setForm] = useState({
    email:'',
    password:''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {

  }
  return (
   <SafeAreaView className='bg-primary h-full'>
    <ScrollView>
      <View className='w-full justify-center min-h-[88vh] px-4 my-6'>
     <Image 
     source={images.logo}
     resizeMode='contain'
     className='w-[115px] h-[35px]'
     />

     <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>
      Log in to Aora</Text>
      <FormField  
      title="Email"
      value={form.email}
      handlleChangeText={(e) => setForm({...form, 
        email:e })}
        otherStyles="mt-7"
        keyboardType="email-address"
      />

      <FormField  
      title="Password"
      value={form.password}
      handlleChangeText={(e) => setForm({...form, 
        password:e })}
        otherStyles="mt-7"
      />

      <CustomButton 
      title="Sign In"
      handlePress={submit}
      containerStyles="mt-7"
      isLoading={isSubmitting}
      />

      <View className='justify-center pt-5 flex-row gap-2'>
        <Text className='text-lg text-gray-100 font-pregular '>
          Don't have an account?
        </Text>
        <Link href="/sign-up" className='text-lg font-psemibold
        text-secondary'>Sign Up</Link>
      </View>
     </View>
    </ScrollView>
   </SafeAreaView>
  )
}

export default SignIn