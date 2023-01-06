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
        <View className='flex-row px-6 mt-16'>
            <View>
                <Text className='text-5xl'>
                    GO
                </Text>
            </View>
                <View>
                    <Text className='text-4xl px-4'>
                        Travel
                    </Text>
                </View>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen