import { View, Text, Image, Alert,} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ScrollView } from 'react-native'
import { Link, router } from 'expo-router'
import  FormField  from "../../components/FormField"


import {images} from "../../constants";
import CustomButton  from "../../components/CustomButton"
import { createUser } from '../../lib/appwrite'

const SignUp = () => {

  const [form,setForm] = useState({
    username:'',
    email:'',
    password:''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async ()  => {

    
   if (!form.username || !form.email || !form.password) 
    {
    Alert.alert('Error', 'Please fill in all fields')
   }
   
   setIsSubmitting(true);

   try {
    const result = await createUser(form.email, form.password, form.username)
   router.replace('./sign-in' )
  } catch (error) {
    let errorMessage = "You don't have an account yet";
    if (error instanceof Error) {
      errorMessage = error.message
    }
    Alert.alert('Error', errorMessage)
   } finally{
    setIsSubmitting(false)
   }
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
      Sign Up to Aora</Text>

      <FormField 
            title="Username"
            value={form.username}
            handleChangeText={(e: any) => setForm({
              ...form,
              username: e
            })}
            otherStyles="mt-7" placeholder={undefined}      />

      <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e: any) => setForm({
              ...form,
              email: e
            })}
            otherStyles="mt-7" placeholder={undefined}        
      />

      <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e: any) => setForm({
              ...form,
              password: e
            })}
            otherStyles="mt-7" placeholder={undefined}      />

      <CustomButton 
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting} textStyles={undefined}      />

      <View className='justify-center pt-5 flex-row gap-2'>
        <Text className='text-lg text-gray-100 font-pregular '>
          Have an account already?
        </Text>
        <Link href="/sign-in" className='text-lg font-psemibold
        text-secondary'>Sign In</Link>
      </View>
     </View>
    </ScrollView>
   </SafeAreaView>
  )
}

export default SignUp