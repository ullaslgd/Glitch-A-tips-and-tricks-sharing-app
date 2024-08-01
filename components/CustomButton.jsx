import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = () => {
  return (
    <TouchableOpacity className='bg-violet-500 min-h-[40px] justify-self-center rounded-[20px]'> 
      <Text>CustomButton</Text>
    </TouchableOpacity>
  )
}

export default CustomButton