import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'

const HomeScreen = () => {

    const navigation = useNavigation();
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

  return (
    <SafeAreaView className='bg-white flex-1 relative'>
        {/* First Section */}
        <View className='flex-row px-6 mt-16'>
            <View className='bg-[#1A89FC] items-center justify-center rounded-full p-4'>
                <Text className='text-5xl text-white p-2'>
                    Hero
                </Text>
            </View>
                <View>
                    <Text className='text-5xl text-[#24305E] px-4 my-6 italic'>
                        Travel
                    </Text>
                </View>
        </View>
        {/* Second Section */}
        <View className='mx-4 px-6 mt-14 space-y-3'>
            <Text className='text-[#24305E] text-[42px]'>
                Discover Your
            </Text>
            <Text className='text-[#24305E] text-[38px] font-bold'>
                Paradise
            </Text>
        </View>
        {/* Circle Section */}
        <View className='w-[400px] h-[400px] bg-[#FCCD04] rounded-full absolute bottom-36 -right-36'>
        </View>
        <View className='w-[400px] h-[400px] bg-[#1A89FC] rounded-full absolute -bottom-28 -left-36'>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen