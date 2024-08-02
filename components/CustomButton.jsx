import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({ name , handlePress , otherStyles}) => {
  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.7} className={` ${otherStyles } bg-violet-600 min-h-[40px] justify-center px-4 py-3 rounded-[10px]`}>
      <Text className="text-white font-psemibold">{name}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
