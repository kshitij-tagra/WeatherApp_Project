import {
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
  StyleSheet,
} from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "react-native-vector-icons";
import { React, useState, useEffect } from "react";
import Hour from "./components/hour";
import Days from "./components/days";
import UV from "./components/uv";
import Sunset from "./components/sunset";
import VISIBILITY from "./components/visibility";
import FeelsLike from "./components/feels";

export default function App() {
  const [city, setCity] = useState("calgary");
  const [weather, setWeather] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [isthereerror, setIsthereerror] = useState(false);
  const [enteringcity, setEnteringcity] = useState(false);
  const [cityname, setCityname] = useState("");
  const [citylist, setCitylist] = useState(["calgary"]);
  const [citynumber, setCitynumber] = useState(0);

  useEffect(() => {
    async function fetchWeather() {
      if (city == "") {
        setCity("calgary");
      }
      setIsFetching(true);
      const url1 = `https://corsproxy.io/?https://api.weatherapi.com/v1/forecast.json?key=ba3a39e42ea740cfae9232030241704&q=${city}&days=3&aqi=no&alerts=no`;
      const options1 = {
        method: "GET",
      };

      try {
        const response = await fetch(url1, options1);
        const result = await response.json();
        if (!result.error) {
          setWeather(result);
        } else {
          setIsthereerror(true);
          alert("City Not Found");
        }
        setIsFetching(false);
      } catch (error) {
        setIsFetching(false);
        console.error("Catcher Error is: " + error);
      }
    }

    fetchWeather();
  }, [city]);

  const handleCityChange = () => {
    console.log("City Name: " + cityname);
    citylist.push(cityname);
    console.log(citylist);
    console.log("length: " + citylist.length);
    console.log("Start: " + citynumber);
    setEnteringcity(false);
  };

  const handleNextCity = () => {
    console.log("Before: " + citynumber);
    setCity(citylist[citynumber + 1]);
    setCitynumber(citynumber + 1);
    console.log("After: " + citynumber);
  };

  const handlePreviousCity = () => {
    console.log("Before: " + citynumber);
    setCity(citylist[citynumber - 1]);
    setCitynumber(citynumber - 1);
    console.log("After: " + citynumber);
  };

  return (
    <LinearGradient
      colors={["#00DEFF", "#0087BD"]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      className="w-screen h-screen"
    >
      <BlurView blurRadius={1} className="fixed w-screen h-12 z-20"></BlurView>
      <Pressable
        onPress={handleNextCity}
        className={`${
          citynumber >= citylist.length - 1 || citylist.length < 2
            ? " hidden"
            : " z-30"
        } `}
      >
        <MaterialIcons
          name="navigate-next"
          size={58}
          color="black"
          className="absolute top-[70px] right-5 text-white"
        />
      </Pressable>
      <Pressable
        onPress={handlePreviousCity}
        className={`${
          citynumber == 0 || citylist.length < 2 ? " hidden" : "z-30"
        } `}
      >
        <MaterialIcons
          name="navigate-before"
          size={58}
          color="black"
          className="absolute top-[70px] left-5 text-white"
        />
      </Pressable>
      <View className=" flex flex-col items-center justify-center h-[200px]">
        {weather != null ? (
          <>
            <Text className=" text-3xl font-semibold text-white">
              {weather.location.name}
            </Text>
            <Text className=" text-5xl font-bold text-white m-1">
              {weather.current.temp_c}&deg;c
            </Text>
            <Text className=" text-3xl font-base text-white">
              {weather.current.condition.text}
            </Text>
          </>
        ) : (
          <Text className=" text-3xl font-semibold text-white">Loading...</Text>
        )}
      </View>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 50 }}
        className=" rounded-[50px] py-2"
      >
        <View className=" h-[150px] px-4">
          <Hour weather={weather} />
        </View>
        <View className=" h-[260px] px-4 mt-5">
          <Days weather={weather} />
        </View>
        <View className="flex rounded-3xl justify-between px-4 flex-row h-[180px] mt-5">
          <UV weather={weather} />
          <Sunset weather={weather} />
        </View>
        <View className="flex rounded-3xl justify-between px-4 flex-row h-[180px] mt-5">
          <FeelsLike weather={weather} />
          <VISIBILITY weather={weather} />
        </View>
      </ScrollView>
      <View className="flex fixed bottom-[30px] flex-col w-full justify-center items-start px-5">
        <Pressable
          className=" w-[50px] h-[50px] bg-[#32c0f9] rounded-full flex items-center justify-center"
          onPress={() => {
            setEnteringcity(true);
          }}
        >
          <Text className="text-white text-3xl font-semibold">+</Text>
        </Pressable>
      </View>
      {enteringcity && (
        <View className=" absolute h-screen w-screen flex flex-col items-center justify-center">
          <View className=" overflow-hidden h-[700px] w-[400px] rounded-3xl">
            <BlurView
              intensity={40}
              tint="prominent"
              className=" h-full w-full flex flex-col items-center justify-evenly "
            >
              <Text className="text-5xl font-bold text-white">
                Enter City Name
              </Text>
              <TextInput
                onChangeText={setCityname}
                value={cityname}
                className="w-[250px] h-12 border-2 border-solid bg-white/40 border-blue-200 text-blue-500 px-5 rounded-xl"
              />
              <Pressable
                className="w-1/2 h-12 bg-[#32c0f9] rounded-xl flex items-center justify-center"
                onPress={handleCityChange}
              >
                <Text className="text-white text-xl font-bold">Search</Text>
              </Pressable>
              <Pressable
                className="w-1/2 h-12 bg-red-500 rounded-xl flex items-center justify-center"
                onPress={() => {
                  setEnteringcity(false);
                }}
              >
                <Text className="text-white text-xl font-bold">Cancel</Text>
              </Pressable>
            </BlurView>
          </View>
        </View>
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    alignItems: "center",
    gap: 15,
    marginRight: 600,
    paddingRight: 40,
  },
});
