import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function DessertsList({ data }) {
  const lowCalorieDesserts = data
    .filter(dessert => dessert.calories < 500)
    .sort((a, b) => a.calories - b.calories);

  return (
    <View>
      {lowCalorieDesserts.map((dessert, index) => (
        <Text key={index} style={styles.desserts}>
          {dessert.name} - {dessert.calories} cal
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  desserts: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "light",
    marginBottom: 5,
    marginTop: 5,
  },
});