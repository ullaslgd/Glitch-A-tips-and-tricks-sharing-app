/// <reference types="nativewind/types" />

import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link, SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';


export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
    <Text className="text-3xl">Glitch!
    </Text>
    <StatusBar style="auto" />
    <Link href="/home" style={{color:'red'}}>Profile</Link>
   </View>
  );
}

