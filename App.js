import {Text,View,StyleSheet} from 'react-native'
import DessertsList from "./DessertsList";
console.log(desserts)
const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function App() {
  return (
    <View>
      <Text style={styles.header}>List of low calorie desserts:</Text>
      <DessertsList data={desserts} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 30,
    marginTop: 70,
  },
});

export default App;
