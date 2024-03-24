import { View, Text, Pressable } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { styled } from 'nativewind'
import { SafeAreaView } from 'react-native-safe-area-context'
import { collection, getDoc,doc } from "firebase/firestore"; 
import { auth ,db} from '../Firebase/Firebase'
import { getAuth, signOut } from 'firebase/auth';


const StyledText = styled(Text)
const StyledPressable = styled(Pressable)
export default function MainPage({ navigation, route }) {


    const userId = route.params?.userData?.userId;

    useLayoutEffect(() => {
        async function getData() {
           
          
            
          
                    navigation.setOptions({
                        title: "Welcome " + auth.currentUser.displayName,
                        headerLeft: null
                    });
            
        }
    
        getData(); 
    }, [navigation, userId]); 


    function SignOut(){
        
        signOut(auth)
            .then(() => {
                console.log('User signed out successfully');
                navigation.reset({
                    index: 0,
                    routes: [{
                        name: 'SplashScreen',
                    }]
                })
            })
            .catch((error) => {
                console.error('Error signing out:', error.message);
            });
    }

    return (

        <SafeAreaView>
            <View className=" flex flex-col h-56 items-center justify-evenly">
                <View className='flex items-center'> 
                    <StyledText className=''>Welcome to APP  </StyledText>
                    <StyledText className=''> Your UID is {auth.currentUser.uid} </StyledText>
                </View>
                <StyledPressable onPress={SignOut} style={{ borderColor: "rgba(157, 217, 229, 1)" }} className=' border-4    p-3 rounded-2xl  px-6 active:bg-cyan-500'>
                    <StyledText className=' text-base'>SignOut</StyledText>
                </StyledPressable>
            </View>
        </SafeAreaView>
    )
}