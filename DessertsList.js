import React from 'react';
import { Text, View } from 'react-native';

export default function DessertsList({ data }) {
  // Filter desserts with less than 500 calories and sort them by calories
  const lowCalorieDesserts = data
    .filter(dessert => dessert.calories < 500)
    .sort((a, b) => a.calories - b.calories);

  return (
    <View>
      {lowCalorieDesserts.map((dessert, index) => (
        <Text key={index}>
          {dessert.name} - {dessert.calories} cal
        </Text>
      ))}
    </View>
  );
}
