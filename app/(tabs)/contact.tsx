import React from "react";
import { View } from "react-native";
import ContactPage from "../../components/ContactPage";

const Contact = () => {
  // Create a dummy movie object since ContactPage expects it as a prop
  const address: Address = {
    id: 0,
    title: "Get in Touch",
    city: "Hollywood",
    street: "123 Movie Street",
    zipCode: "90210",
    country: "United States",
    phone: "+1 (555) 123-4567",
    email: "support@movieapp.com",
  };

  return (
    <View className="flex-1">
      <ContactPage address={address} />
    </View>
  );
};

export default Contact;
