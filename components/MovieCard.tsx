import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { icons } from "@/constants/icons";

const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}: Movie) => {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className="bg-white rounded-xl p-4 mb-4 shadow-lg w-[48%] mx-1">
        {/* Movie Poster */}
        <View className="relative">
          <Image
            source={{
              uri: poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : "https://placehold.co/600x400/1a1a1a/FFFFFF.png",
            }}
            className="w-full h-40 rounded-lg mb-3"
            resizeMode="cover"
          />

          {/* Star Rating Badge */}
          <View className="absolute bottom-2 left-2 bg-black/70 rounded-full p-1 flex-row items-center">
            <Image source={icons.star} className="size-3" tintColor="#FFA500" />
            <Text className="text-white text-xs font-bold ml-1">
              {(vote_average / 2).toFixed(1)}
            </Text>
          </View>
        </View>

        {/* Movie Details */}
        <View className="flex-1">
          <Text className="text-black font-bold text-sm mb-1" numberOfLines={2}>
            {title}
          </Text>

          <Text className="text-gray-500 text-xs font-medium">
            {release_date?.split("-")[0]}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
