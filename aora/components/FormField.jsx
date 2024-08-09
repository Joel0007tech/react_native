import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useState } from 'react'

import {icons} from "../constants"

const FormField = ({ title, value, placeholder, 
    handleChangeText, otherStyles, ...props
}) => {

const [showpassword, setShowpassword] = useState(false)

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">
        {title}</Text>

        <View className='w-full h-16 px-4 bg-black-100 border-2
         border-black-200 rounded-2xl focus:border-secondary ites-cente flex-row'>
            <TextInput
             className="flex-1 text-white font-psemibold text-base"
             value={value}
             placeholder={placeholder}
             placeholderTextColor="#7b7b8b"
             onChangeText={handleChangeText}
             secureTextEntry={title === 'Password' && !showpassword}
             />
             {title === 'Password' && (
                <TouchableOpacity onPress={() => 
                setShowpassword(!showpassword)}>
              <Image
              source={!showpassword ? icons.eye : icons.eyeHide } className='
              w-6 h-6 mt-5' resizeMode='contain'/>
                </TouchableOpacity>
             )}
            </View>
    </View>
  )
}

export default FormField