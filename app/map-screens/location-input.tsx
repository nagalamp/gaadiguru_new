// app/components/LocationInput.tsx

import React, { useRef } from "react";

import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

import {
  Ionicons,
} from "@expo/vector-icons";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const GOOGLE_API_KEY =
  process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY || "";

export type LocationType = {
  address: string;
  latitude: number;
  longitude: number;
  details?: any;
};

type Props = {
  placeholder: string;

  value: string;

  onChangeText: (
    text: string
  ) => void;

  onSelect: (
    location: LocationType
  ) => void;
};

export default function LocationInput({
  placeholder,
  value,
  onChangeText,
  onSelect,
}: Props) {
  const inputRef =
    useRef<any>(null);

  const clearInput = () => {
    onChangeText("");

    inputRef.current?.setAddressText(
      ""
    );
  };

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        ref={inputRef}
        placeholder={placeholder}
        fetchDetails
        debounce={200}
        enablePoweredByContainer={false}
        query={{
          key: GOOGLE_API_KEY,
          language: "en",
        }}
        onPress={(
          data,
          details = null
        ) => {
          const location = {
            address:
              details?.formatted_address ||
              data.description,

            latitude:
              details?.geometry
                ?.location?.lat || 0,

            longitude:
              details?.geometry
                ?.location?.lng || 0,

            details,
          };

          onSelect(location);

          inputRef.current?.setAddressText(
            location.address
          );
        }}
        textInputProps={{
          value,
          onChangeText,
        }}
        renderRightButton={() =>
          value ? (
            <TouchableOpacity
              style={
                styles.clearButton
              }
              onPress={clearInput}
            >
              <Ionicons
                name="close-circle"
                size={20}
                color="#888"
              />
            </TouchableOpacity>
          ) : null
        }
        renderRow={(rowData) => (
          <View style={styles.row}>
            <Text style={styles.rowText}>
              {rowData.description}
            </Text>
          </View>
        )}
        styles={{
          container: {
            flex: 0,
          },

          textInputContainer: {
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 8,
            paddingHorizontal: 8,
          },

          textInput: {
            height: 48,
            fontSize: 16,
            color: "#000",
            paddingRight: 32,
          },

          listView: {
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 8,
            marginTop: 4,
          },
        }}
      />
    </View>
  );
}

const styles =
  StyleSheet.create({
    container: {
      width: "100%",
    },

    clearButton: {
      position: "absolute",
      right: 12,
      top: 14,
      zIndex: 10,
    },

    row: {
      padding: 12,
      borderBottomWidth: 1,
      borderBottomColor:
        "#eee",
    },

    rowText: {
      fontSize: 14,
      color: "#000",
    },
  });