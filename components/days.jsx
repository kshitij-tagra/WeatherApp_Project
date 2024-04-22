import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
export default function Days({weather}) {
    return (
        <View className="flex rounded-3xl p-5 flex-col bg-[#00DEFF] h-full">
        <View className=" flex flex-row justify-between items-center h-[50px] w-full border-b-2 border-solid border-blue-200 py-2 ">
            <Text className="text-center text-white text-lg font-medium">3-DAY Forecast</Text>
        </View>  
        {weather != null ?
          <>
        <View className=" flex flex-row justify-between items-center h-[50px] w-full border-b-2 border-solid border-blue-200 py-2 ">
            <Text className="text-center w-1/3 text-white text-2xl font-extrabold">Today</Text>
            <View className="flex flex-col items-center justify-center w-1/3">    
            <Image source={{uri:`https:${weather.forecast.forecastday[0].day.condition.icon}`}} className=" h-[50px] w-[50px] object-cover aspect-square"/>
            </View>
            <View className="flex flex-row w-1/3 justify-center items-center">
            <Text className="text-center text-white text-xl font-base">{weather.forecast.forecastday[0].day.mintemp_c}&deg;</Text>
            <Text className="text-center text-white text-3xl font-bold">/</Text>
            <Text className="text-center text-white text-xl font-extrabold">{weather.forecast.forecastday[0].day.maxtemp_c}&deg;</Text>
            </View>
        </View>        
        <View className=" flex flex-row justify-between items-center h-[50px] w-full border-b-2 border-solid border-blue-200 py-2 ">
            <Text className="text-center text-white w-1/3 text-lg font-extrabold">{weather.forecast.forecastday[1].date}</Text>
            <View className="flex flex-col items-center justify-center w-1/3">    
            <Image source={{uri:`https:${weather.forecast.forecastday[1].day.condition.icon}`}} className=" h-[30px] w-[30px] object-cover aspect-square"/>
            </View>
            <View className="flex flex-row w-1/3 justify-center items-center">
            <Text className="text-center text-white text-xl font-base">{weather.forecast.forecastday[1].day.mintemp_c}&deg;</Text>
            <Text className="text-center text-white text-3xl font-bold">/</Text>
            <Text className="text-center text-white text-xl font-extrabold">{weather.forecast.forecastday[1].day.maxtemp_c}&deg;</Text>
            </View>
        </View>      
          <View className=" flex flex-row justify-between items-center h-[50px] w-full border-b-2 border-solid border-blue-200 py-2 ">
          <Text className="text-center text-white text-lg w-1/3 font-extrabold">{weather.forecast.forecastday[2].date}</Text>
          <View className="flex flex-col items-center justify-center w-1/3">    
            <Image source={{uri:`https:${weather.forecast.forecastday[2].day.condition.icon}`}} className=" h-[30px] w-[30px] object-cover aspect-square"/>
            </View>
            <View className="flex flex-row w-1/3 justify-center items-center">
            <Text className="text-center text-white text-xl font-base">{weather.forecast.forecastday[2].day.mintemp_c}&deg;</Text>
            <Text className="text-center text-white text-3xl font-bold">/</Text>
            <Text className="text-center text-white text-xl font-extrabold">{weather.forecast.forecastday[2].day.maxtemp_c}&deg;</Text>
            </View>
        </View> 
          </>
          :
          <Text className=" text-3xl font-semibold text-white">Loading...</Text>
  } 
        </View>
    );
};
const styles = StyleSheet.create({
    scrollView: {
      alignItems: 'center',
      gap: 15,
      marginRight: 600,
      paddingRight: 40,
    },
  });