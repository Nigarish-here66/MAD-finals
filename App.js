import {Text,View} from 'react-native'
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
      <Text>List of low calorie desserts:</Text>
      <DessertsList data={desserts} />
    </View>
  );
}

export default App;
