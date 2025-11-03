import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

interface Props {
  placeholder: string;
  onPress?: () => void;
  value?: string;
  onChangeText?: (text: string) => void;
}

const SearchBar = ({ placeholder, onPress, value, onChangeText }: Props) => {
  // internal fallback value so input remains editable even if parent doesn't control value
  const [internalValue, setInternalValue] = useState("");

  const displayValue = value !== undefined ? value : internalValue;

  const handleChange = (text: string) => {
    if (onChangeText) {
      onChangeText(text);
    } else {
      setInternalValue(text);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={displayValue}
        onChangeText={handleChange}
        onFocus={onPress}
        placeholder={placeholder || "Search"}
        placeholderTextColor="gray"
        editable={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
  },
  input: {
    height: 40,
    color: "black",
    fontSize: 16,
  },
});

export default SearchBar;
