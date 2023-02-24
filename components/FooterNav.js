import * as React from "react";
import { View, Text,TouchableOpacity } from "react-native";
import styles from "../style/basestyle";

export const FooterNav = ({navigation}) => {
  return (
    <View style={styles.footer}>
      <View style={styles.footer_icon_box}>
        <TouchableOpacity onPress={() => navigation.navigate("basket")}>
          <Text style={styles.footer_icon_text}>Sepet</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("product")}>
          <Text style={styles.footer_icon_text}>Ürün</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
