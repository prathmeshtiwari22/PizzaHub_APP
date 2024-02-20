import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import MenuComponent from "../components/MenuComponent";
import { useNavigation } from "@react-navigation/native";
import { CItems } from "../Context";

const HomeScreen = () => {
  const navigation=useNavigation();
   const { cart, setcart } = useContext(CItems);
  const data = [
    {
      id: "0",
      image:
        "https://couponswala.com/blog/wp-content/uploads/2020/01/Pizza-Hut-Unlimited-Offer-696x417.jpg",
    },
    {
      id: "1",
      image:
        "https://www.frugalfeeds.com.au/wp-content/uploads/2020/03/3-Pizzas-3-Sides-34-Delivered-Pizza-Hut.jpg",
    },
    {
      id: "2",
      image:
        "https://mma.prnewswire.com/media/770410/PIZZA_HUT___5_Lineup.jpg?p=publish&w=950",
    },
    {
      id: "3",
      image:
        "https://www.frugalfeeds.com.au/wp-content/uploads/2018/03/capture_2018-03-06-11-05-171345971404.-1005x1024.jpg",
    },
    {
      id: "4",
      image:
        "https://i0.wp.com/www.frugalfeeds.com.au/wp-content/uploads/2018/06/unnamed-9.png?fit=900%2C1272&ssl=1",
    },
    {
      id: "5",
      image:
        "https://www.manilaonsale.com/wp-content/uploads/2020/09/pizza-hut-flash-sale-50-off-sept-promo-poster-1068x1068.jpg",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 7, marginTop: 50 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, key) => (
          <View style={{ margin: 10 }} key={key}>
            <Image
              style={{ width: 220, height: 130 }}
              source={{ uri: item.image }}
            />
          </View>
        ))}
      </ScrollView>

      <MenuComponent />

      <View style={{ padding: 10 }}>
        <Image
          style={{ width: "100%", height: 120, borderRadius: 7 }}
          source={{
            uri: "https://images.firstwefeast.com/complex/image/upload/f_auto,fl_lossy,q_auto,w_1200/psx4qz8anlcy3ufvflbr",
          }}
        />
      </View>

      <View style={{ padding: 10 }}>
        <Image
          style={{ width: "100%", height: 120, borderRadius: 7 }}
          source={{
            uri: "https://tse3.mm.bing.net/th?id=OIP.wImhpFJlJdqgfpnII18TjgHaDt&pid=Api&P=0&h=180",
          }}
        />
      </View>

      <View style={{ padding: 10 }}>
        <Image
          style={{ width: "100%", height: 120, borderRadius: 7 }}
          source={{
            uri: "https://images.firstwefeast.com/complex/image/upload/f_auto,fl_lossy,q_auto,w_1200/psx4qz8anlcy3ufvflbr",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
