import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";


const MenuComponent = () => {
  const navigation=useNavigation();
  
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 17, fontWeight: "bold" }}>Explore Menu</Text>
      <Pressable
        style={{
          backgroundColor: "#006491",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 20,
          marginTop: 14,
          borderRadius: 10,
        }}
      >
        <Pressable onPress={()=> navigation.navigate("Pizza")}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 40 }}
            source={{
              uri: "https://i.ytimg.com/vi/h7muFBOJfbE/maxresdefault.jpg",
            }}
          />
          <Text
            style={{
              textAlign: "center",
              fontSize: 17,
              color: "white",
              marginTop: 10,
            }}
          >
            Veg Pizza
          </Text>
        </Pressable>

        <Pressable  onPress={()=>navigation.navigate("Beva")}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 40 }}
            source={{
              uri: "https://i.pinimg.com/736x/25/71/40/25714007ba4bf13aca35638bbc06cb53--pizza-hut-drinks.jpg",
            }}
          />
          <Text
            style={{
              textAlign: "center",
              fontSize: 17,
              color: "white",
              marginTop: 10,
            }}
          >
            Beverages
          </Text>
        </Pressable>

        <Pressable onPress={()=>navigation.navigate("NonVeg")}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 40 }}
            source={{
              uri: "https://nctricks.com/wp-content/uploads/2019/06/photo6100257430966479189.jpg",
            }}
          />
          <Text
            style={{
              textAlign: "center",
              fontSize: 17,
              color: "white",
              marginTop: 10,
            }}
          >
            NonVeg Pizza
          </Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

export default MenuComponent;

const styles = StyleSheet.create({});
