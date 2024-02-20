import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Drinks from "../components/Drinks";
import sides from "../data/sides";
import { CItems } from "../Context";


const Beva = () => {
     const data=sides;
  const navigation=useNavigation();
  const { cart, setcart } = useContext(CItems);
   const total = cart
     .map((item) => Number(item.price * item.quantity))
     .reduce((prev, curr) => prev + curr, 0);
   console.log(cart, "cart items added");
   console.log(total, "total price");
  return (
    <View style={{ marginTop: 50, flex: 2 }}>
      <AntDesign
        name="back"
        size={24}
        color="black"
        onPress={() => navigation.goBack()}
      />
      <FlatList
        numColumns={2}
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Drinks pizza={item} />}
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
    </View>
  );
};

export default Beva;

const styles = StyleSheet.create({});
