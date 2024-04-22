import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
export default function Hour({weather}) {
    return (
        <ScrollView contentContainerStyle={styles.scrollView} horizontal className="flex rounded-3xl px-5 py-2 flex-row bg-[#00DEFF] h-full">
        {weather != null ?
          <>
        {weather.forecast.forecastday[0].hour.map((hour,index)=>(
        <View key={index} className=" flex flex-col justify-evenly h-full w-[45px]">
            <Text className="text-center text-white text-xs font-extrabold">{hour.time.split(" ")[1]}</Text>
            <View className="flex flex-col items-center justify-center w-full">    
            <Image source={{uri:`https:${weather.forecast.forecastday[0].day.condition.icon}`}} className=" h-[60px] w-[60px] object-cover aspect-square"/>
            </View>
            <Text className="text-center text-white text-sm font-extrabold">{hour.temp_c}&deg;</Text>
          </View>        
        ))}
          </>
          :
          <Text className=" text-3xl font-semibold text-white">Loading...</Text>
  }
        </ScrollView>
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