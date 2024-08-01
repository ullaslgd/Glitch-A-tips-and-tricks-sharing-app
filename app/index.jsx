/// <reference types="nativewind/types" />

import { Text, View ,ScrollView, Image  } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link, SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import CustomButton from '@/components/CustomButton';

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-primary h-full ">
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View className="flex flex-col justify-center h-full items-center">
          

            <Image source={images.logo} className='h-[160] w-[160]' resizeMode='contain' /> 
          {/* <Image source={images.cards} className='w-[300px] h-[300px] rounded-[30px]' resizeMode='contain'   /> */}

          <View className=" mt-[60px]">
          <Text className="text-white font-bold text-2xl text-center">
          <Text className='text-violet-600'> Glitch </Text> is your go-to app for unlocking gaming greatness
          </Text>
        </View>

        <Text className="text-gray-500 text-center mt-7">
        Discover a treasure trove of tips, tricks, and strategies shared by fellow gamers.
        </Text>

        <CustomButton />

        </View>

     

      </ScrollView>
    </SafeAreaView >
     
  );
}

