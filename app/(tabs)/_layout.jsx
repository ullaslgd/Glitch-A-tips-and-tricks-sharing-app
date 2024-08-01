import { View, Text , Image} from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'


const TabIcon = ({color, icon ,name, focused ,})=>{
  return(
    <View className='justify-center items-center'>
      <Image 
      source={icon}
      resizeMode='contain'
      tintColor={color}
      className='w-6 h-6'/>
      {/* <Text className={`${focused ? 'font-bold': 'font-medium'} text-xl`}>
        {name}
      </Text> */}
    </View>
  )
}

const TabsLayout = () => {
  return (
   <>
   <Tabs
   screenOptions={{
    tabBarShowLabel:true,
    tabBarActiveTintColor:'#ffa001',
    tabBarInactiveTintColor:'#cdcde0',
    tabBarStyle :{
      backgroundColor:"#161622",
      borderTopWidth: 1,
      borderTopColor: '#161622',
      height: 40,
    }
   }}>
    <Tabs.Screen name='home' options={{
      title: 'Home',
      headerShown: false,
      tabBarIcon: ({color,focused})=>(
        <TabIcon 
          icon={icons.home}
          color={color}
          focused={focused}
        />
      )

    }}/>
    <Tabs.Screen name='bookmark' options={{
      title: 'Bookmark',
      headerShown: false,
      tabBarIcon: ({color,focused})=>(
        <TabIcon 
          icon={icons.bookmark}
          color={color}
          focused={focused}
        />
      )

    }}/>
    <Tabs.Screen name='create' options={{
      title: 'Create',
      headerShown: false,
      tabBarIcon: ({color,focused})=>(
        <TabIcon 
          icon={icons.plus}
          color={color}
          focused={focused}
        />
      )

    }}/>
    <Tabs.Screen name='Profile' options={{
      title: 'Profile',
      headerShown: false,
      tabBarIcon: ({color,focused })=>(
        <TabIcon 
          icon={icons.profile}
          color={color}
          focused={focused}
        />
      )

    }}/>

   </Tabs>
   </>
   
  )
}

export default TabsLayout