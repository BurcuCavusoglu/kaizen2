import React, {  useMemo } from "react";
import { observer } from "mobx-react";
import { FlatList, View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../style/basestyle";
import products from "../store/Product.json";
import { basketStore } from "../store/BasketStore";
import { Icon } from "react-native-elements";

const ProductList = observer(() => {
  const basketItems = useMemo(
    () => basketStore.basketItems ?? [],
    [basketStore.basketItems]
  );
  const setBasketItems = (item, add) => {
    basketStore.addOrRemoveFromBasket(item, add);
  };

  const tabItem = (item) => {
    const inBasket = basketItems.findIndex(
      (x) => x.ProductID === item.ProductID
    );
    return (
      <View key={item.ProductID} style={styles.product_box}>
        <View style={styles.product_box_image_container}>
          <View style={styles.product_box_button_container}>
            {inBasket > -1 ? (
              <>
                <TouchableOpacity
                  style={styles.product_box_add_remove_button}
                  onPress={() => {
                    setBasketItems(item, "add");
                  }}
                >
                  <Icon name="add" color="#795E35" />
                </TouchableOpacity>
                <Text style={styles.product_box_add_remove_input}>
                  {basketItems[inBasket].adet}
                </Text>
                <TouchableOpacity
                  style={styles.product_box_add_remove_button}
                  onPress={() => {
                    setBasketItems(item, "remove");
                  }}
                >
                  <Icon name="remove" color="#795E35" />
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity
                style={styles.product_box_add_remove_button}
                onPress={() => {
                  setBasketItems(item, "add");
                }}
              >
                <Icon name="add" color="#795E35" />
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.product_box_image}>
            <Image
              style={styles.product_box_image_image}
              source={{ uri: `${item.ImageUrl}` }}
            />
          </View>
          <Text style={styles.product_box_text}>{item.ProductName}</Text>
        </View>
        <View style={styles.product_box_price_container}>
          <Text>{item.UnitPrice} TL</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{ paddingHorizontal: "3%" }}>
      <FlatList
        data={products}
        renderItem={({ item }) => tabItem(item)}
        keyExtractor={(item) => item.ProductID}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          paddingHorizontal: "2%",
          paddingVertical: "3%",
        }}
      />
    </View>
  );
});

export default ProductList;
