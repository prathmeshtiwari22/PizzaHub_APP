import React from "react";
import { StyleSheet, Text, View,Image } from "react-native";
import MapView, { Marker } from "react-native-maps";

const OrderS = () => {
  return (
    <View style={{ flex: 1, marginTop: 50, backgroundColor: "#006491" }}>
      <View
        style={{
          backgroundColor: "white",
          margin: 10,
          borderRadius: 6,
          padding: 10,
        }}
      >
        <Text style={{ textAlign: "center", fontSize: 15 }}>
          Order has been Approved
        </Text>

        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          Arriving in 1 Hours
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: 500,
          width: 400,
        }}
      >
        <MapView
          style={{ height: 500, width: 400 }}
          initialRegion={{
            latitude: -20.4697,
            longitude: -54.6201,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker coordinate={{ latitude: -20.4697, longitude: -54.6201 }} />
        </MapView>
      </View>
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          margin: 10,
          borderRadius: 8,
          marginTop: 10,
        }}
      >
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            borderColor: "#fff0f5",
            borderWidth: 1,
          }}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLXBWH6Tl3ITRFCI-ByH7IR_c0gRQhRsXzQ&usqp=CAU",
          }}
        />
        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "700", color: "#ff6e4a" }}>
            4 valets near the restaurent
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "600", color: "#696969" }}>
            Anyone will pick your order
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OrderS;

const styles = StyleSheet.create({});
