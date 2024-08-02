import { View, Text , TextInput} from 'react-native'
import { Image } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { icons } from '../constants'


const Form = ({ title , value , handleChangeText , otherStyle, keyboardType}) => {

    const [showpassword, setshowpassword] = useState(false)
  return (
    <View className={` ${otherStyle}  space-y-2 `}>
      <Text className="text-xl text-gray-300 font-pmedium">{title}</Text>

      <View className="w-full bg-black-100 h-14 rounded-[17px] border-[0.1px]  items-center">
        <TextInput
            className="w-full h-full px-4 bg-black-100 text-white rounded-2xl border-[0.3px] focus:border-violet-600"
            value={value}
            onChangeText={handleChangeText}
            keyboardType={keyboardType}
            placeholder={` Enter your  ${title}`}
            placeholderTextColor="gray"
            secureTextEntry={title === "Password" ? !showpassword : false}
        />

        {title === "Password" && (
            <TouchableOpacity onPress={()=>setshowpassword(!showpassword)} className="absolute right-4 bottom-4">
                <Image source={!showpassword ? icons.eye : icons.eyehide} className='h-6 w-6' resizeMode='contain'/>
            </TouchableOpacity>
        )}


      </View>
    </View>

  )
}

export default Form
