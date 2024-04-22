import React from 'react';
import { View, Text } from 'react-native';
export default function Sunset({weather}) {
    return (
        <View className=" flex flex-col bg-[#00DEFF] w-[48%] rounded-3xl p-3 h-full">
        <View className=" flex flex-row items-center h-[40px] w-full ">
            <Text className="text-center text-white text-base font-medium">SUNSET</Text>
        </View>
        {weather != null ?
  
        <View className="w-full flex items-center justify-evenly h-[120px]">
          <Text className=" text-white text-4xl font-medium">{weather.forecast.forecastday[0].astro.sunset}</Text>
          <Text className=" text-white text-xl text-left w-full">Sunrise: {weather.forecast.forecastday[0].astro.sunrise}</Text>
        </View>
        :
        <Text className=" text-3xl font-semibold text-white">Loading...</Text>
  }
          </View> 
    );
};