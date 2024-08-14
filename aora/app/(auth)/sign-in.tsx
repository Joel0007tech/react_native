import { View, Text, Image, ScrollView, Alert} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router} from 'expo-router'
import  FormField  from "../../components/FormField"


import {images} from "../../constants";
import CustomButton  from "../../components/CustomButton"
import { signIn } from '@/lib/appwrite'

const SignIn = () => { 

  const [form,setForm] = useState({
    email:'',
    password:''
  })
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async ()  => {
    if (!form.email || !form.password) 
     {
     Alert.alert('Error', 'Please fill in all fields')
    }
    
    setIsSubmitting(true);
 
    try {
     await signIn(form.email, form.password)
    router.replace('./home' )
   } catch (error) {
    let errorMessage = "Your details are not correct";
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
      Log in to Aora</Text>
      <FormField  
            title="Email"
            value={form.email}
            handleChangeText={(e: any) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address" placeholder={undefined}      />

      <FormField  
            title="Password"
            value={form.password}
            handleChangeText={(e: any) => setForm({
              ...form,
              password: e
            })}
            otherStyles="mt-7" placeholder={undefined}      />

      <CustomButton 
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting} textStyles={undefined}      />

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