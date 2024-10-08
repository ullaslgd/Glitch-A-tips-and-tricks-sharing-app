import { View, Text ,ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Form from '../../components/Form'
import { useState } from 'react'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'


const SignUP = () => {

    const [form, setForm] = useState({
        username:"",
        email: "",
        password: "",
    });

const submit = ()=>{


}

  return (
    <SafeAreaView className='bg-primary h-full '>
        <ScrollView contentContainerStyle={{height:"100%"}}>
         <View className="w-full min-h-full px-4 my-6 justify-center">
            <Text className="text-white text-3xl font-psemibold ">
                Sign Up to Glitch
            </Text>
            <Form
            title="Username"
            value={form.username}
            handleChangeText={(e)=>setForm({...Form, username:e})}
            otherStyle="mt-8"/>
            <Form
            title="Email"
            value={form.email}
            handleChangeText={(e)=>setForm({...Form, email:e})}
            otherStyle="mt-7"
            keyBoardType="email-address"/>

            <Form
            title="Password"
            value={form.password}
            handleChangeText={(e)=>setForm({...Form, password:e})}
            otherStyle="mt-7"/>

              <CustomButton name="Sign Up" otherStyles="mt-11 items-center " handlePress={submit}/>
              <View className="flex-row justify-center mt-6 space-x-3">
                <Text className="text-white font-pmedium"> Already have an account ?</Text>
                <Link href="/sign-in" className="text-violet-600 font-psemibold">Sign In</Link>
              </View>

         </View>




        </ScrollView>


    </SafeAreaView>
  )
}

export default SignUP
