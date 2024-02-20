import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import pizza from "../data/pizza";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import PizzaComponent from "../components/PizzaComponent";
import { CItems } from "../Context";


const PizzaScreen = () => {
  const data = pizza;
  const navigation = useNavigation();
  const { cart, setcart } = useContext(CItems);
  const total = cart
    .map((item) => Number(item.price * item.quantity))
    .reduce((prev, curr) => prev + curr, 0);
  console.log(cart, "cart items added");
  console.log(total, "total price");
  return (
    <SafeAreaView style={{ marginTop: 50, flex: 2 }}>
       <AntDesign
        name="back"
        size={24}
        color="black"
        onPress={() => navigation.goBack()}
      />
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => <PizzaComponent pizza={item} />}
      />
      {total === 0 ? null : (
        <Pressable
        onPress={() => navigation.navigate("Cart")}
          style={{
            backgroundColor: "green",
            padding: 10,
            position: "absolute",
            bottom: 100,
            left: 150,
            borderRadius: 6,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 16,
              color: "white",
              
            }}
          >
            Go to Cart
          </Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
};
  
  


export default PizzaScreen;

const styles = StyleSheet.create({});
