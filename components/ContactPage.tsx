import { fetchMoviesApi } from "@/services/api";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Table from "./Table";

const ContactPage = ({ address }: { address: Address }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    // call the API as a side effect; do not return JSX from useEffect
    fetchMoviesApi({ query: "Our Savior" })
      .then((result) => {
        // handle result if needed
        console.log(result);
        setMovies(result as any);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#030014]">
      <ScrollView
        className="flex-1 px-4 py-6"
        showsVerticalScrollIndicator={true}
        bounces={true}
        alwaysBounceVertical={true}
        contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="items-center mb-8">
          <Text className="text-white text-3xl font-bold mb-2">Contact Us</Text>
          <Text className="text-gray-400 text-center text-base">
            We'd love to hear from you! Get in touch with us.
          </Text>
        </View>

        <View className="bg-[#1A1A2E] rounded-lg p-6 mb-6">
          <Text className="text-white text-xl font-semibold mb-4">
            {address.title}
          </Text>

          <View className="mb-4">
            <Text className="text-gray-300 text-lg font-medium mb-2">
              📧 Email
            </Text>
            <Text className="text-gray-400">{address.email}</Text>
          </View>

          <View className="mb-4">
            <Text className="text-gray-300 text-lg font-medium mb-2">
              📞 Phone
            </Text>
            <Text className="text-gray-400">{address.phone}</Text>
          </View>

          <View className="mb-4">
            <Text className="text-gray-300 text-lg font-medium mb-2">
              📍 Address
            </Text>
            <Text className="text-gray-400">
              {address.street}
              {"\n"}
              {address.city}, {address.zipCode}
              {"\n"}
              {address.country}
            </Text>
          </View>
        </View>

        <View className="bg-[#1A1A2E] rounded-lg p-6 mb-6">
          <Text className="text-white text-xl font-semibold mb-4">
            Support Hours
          </Text>

          <View className="mb-2">
            <Text className="text-gray-300">
              Monday - Friday: 9:00 AM - 6:00 PM PST
            </Text>
          </View>
          <View className="mb-2">
            <Text className="text-gray-300">
              Saturday: 10:00 AM - 4:00 PM PST
            </Text>
          </View>
          <View>
            <Text className="text-gray-300">Sunday: Closed</Text>
          </View>
        </View>

        <Table
          title="Movies List"
          columns={[
            {
              key: "id",
              title: "ID",
              width: "w-20",
              align: "center",
            },
            {
              key: "title",
              title: "Title",
              align: "left",
              numberOfLines: 2,
            },
            {
              key: "vote_count",
              title: "Vote Count",
              width: "w-20",
              align: "center",
            },
            {
              key: "popularity",
              title: "Popularity",
              width: "w-20",
              align: "center",
            },
          ]}
          data={movies}
          maxHeight="max-h-80"
          emptyMessage="No movies found"
        />

        <TouchableOpacity className="bg-blue-600 rounded-lg py-4 px-6 items-center">
          <Text className="text-white text-lg font-semibold">
            Send Us a Message
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactPage;
