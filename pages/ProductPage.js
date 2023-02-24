import * as React from "react";
import { SafeAreaView, View, StatusBar } from "react-native";
import styles from "../style/basestyle";
import ProductList from "../components/ProductList";
import { FooterNav } from "../components/FooterNav";

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <View style={styles.main}>
        <ProductList />
      </View>
      <FooterNav navigation={navigation} />
    </SafeAreaView>
  );
}
