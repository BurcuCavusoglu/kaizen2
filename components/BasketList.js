import React, { useMemo } from "react";
import { observer } from "mobx-react";
import {
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "../style/basestyle";
import { basketStore } from "../store/BasketStore";
import { Icon } from "react-native-elements";

const ProductList = observer(() => {
  const basketItems = useMemo(
    () => basketStore.basketItems ?? [],
    [basketStore.basketItems]
  );

  const basketTotal = useMemo(
    () => basketStore.basketTotal ?? 0,
    [basketStore.basketTotal]
  );

  const tabItem = (item) => {
    return (
      <View key={item.ProductID} style={styles.basket_product_box}>
        <View style={styles.basket_product_box_image}>
          <Image
            style={styles.product_box_image_image}
            source={{ uri: `${item.ImageUrl}` }}
          />
        </View>
        <View style={styles.basket_product_box_center}>
          <Text style={styles.basket_product_box_text}>{item.ProductName}</Text>
          <View style={styles.basket_product_box_add_remove_button}>
            <TouchableOpacity
              style={styles.product_box_add_remove_button}
              onPress={() => {
                basketStore.addOrRemoveFromBasket(item, "add");
              }}
            >
              <Icon name="add" color="#795E35" />
            </TouchableOpacity>
            <Text style={styles.basket_product_box_add_remove_input}>
              {item.adet}
            </Text>
            <TouchableOpacity
              style={styles.product_box_add_remove_button}
              onPress={() => {
                basketStore.addOrRemoveFromBasket(item, "remove");
              }}
            >
              <Icon name="remove" color="#795E35" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.basket_product_box_price}>
          <Text style={styles.basket_product_box_price_text}>
            {item.UnitPrice} TL
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        nestedScrollEnabled={true}
        data={basketItems}
        renderItem={({ item }) => tabItem(item)}
        keyExtractor={(item) => item.ProductID}
        numColumns={1}
        ListFooterComponent={() => (
          <View style={styles.basket_footer}>
            <View style={styles.basket_footer_line}></View>
            <View style={styles.basket_footer_text_container}>
              <Text style={styles.basket_footer_text}>TOPLAM TUTAR</Text>
              <Text style={styles.basket_footer_text_total}>
                {basketTotal} TL
              </Text>
            </View>
            <TouchableOpacity style={styles.basket_footer_button}>
              <Text style={styles.basket_footer_button_text}>
                SEPETİ ONAYLA
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
});

export default ProductList;
