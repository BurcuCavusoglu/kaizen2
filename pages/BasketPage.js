import * as React from "react";
import { SafeAreaView, View, StatusBar } from "react-native";
import styles from "../style/basestyle";
import BasketList from "../components/BasketList";
import { FooterNav } from "../components/FooterNav";

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <View style={styles.main}>
        <BasketList />
      </View>
      <FooterNav navigation={navigation} />
    </SafeAreaView>
  );
}
