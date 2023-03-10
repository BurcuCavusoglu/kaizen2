import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  footer: {
    height: 130,
    backgroundColor: "#FFFFFF",
  },
  footer_icon_box: {
    width: "100%",
    height: 70,
    flexDirection: "row",
    justifyContent: "space-around",
    borderColor: "#ECEEEF",
    borderWidth: 1.5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowRadius: 20,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 6 },
    alignItems: "center",
  },
  footer_icon_text: {
    color: "#CAA171",
    fontSize: 20,
    fontWeight: "600",
  },
  main: {
    height: Dimensions.get("window").height - 130,
    backgroundColor: "#FFFFFF",
  },
  product_box: {
    width: "45%",
    borderWidth: 1,
    borderColor: "#F0DFA0",
    borderRadius: 20,
    aspectRatio: 0.75,
    justifyContent: "space-between",
  },
  product_box_image_container: {
    padding: "10%",
    justifyContent: "space-between",
    height: "80%",
    position: "relative",
  },
  product_box_image: {
    width: "100%",
    paddingHorizontal: "10%",
  },
  product_box_image_image: {
    resizeMode: "contain",
    aspectRatio: 1,
  },
  product_box_button_container: {
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 9,
    justifyContent: "space-between",
    borderBottomLeftRadius: 20,
    shadowRadius: 5,
    elevation: 15,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: -1, height: 1 },
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  product_box_add_remove_button: {
    color: "#795E35",
  },
  product_box_add_remove_input: {
    backgroundColor: "#F0DFA0",
    width: "100%",
    color: "#795E35",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    paddingVertical:5
  },
  product_box_text: {
    textAlign: "center",
  },
  product_box_price_container: {
    backgroundColor: "#F0DFA0",
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 17,
    color: "#795E35",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: "5%",
    width: "100%",
    paddingLeft: "5%",
    paddingVertical: "4%",
  },
  basket_product_box: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    width: "94%",
    aspectRatio: 3.2,
    borderRadius: 20,
    shadowRadius: 5,
    elevation: 15,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 0 },
    alignItems: "center",
    justifyContent: "space-between",
    padding: "3%",
    margin: "3%",
  },
  basket_product_box_image: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
  },
  basket_product_box_center: {
    width: "60%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "3%",
    height: "100%",
  },
  basket_product_box_text: {
    textAlign: "center",
    color: "#322F2F",
    fontSize: 12,
    fontWeight: "500",
  },
  basket_product_box_add_remove_button: {
    flexDirection: "row",
    width: "50%",
    alignItems: "center",
    borderRadius: 5,
    shadowRadius: 5,
    elevation: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 0 },
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  basket_product_box_add_remove_input: {
    color: "#795E35",
    fontSize: 12,
    fontWeight: "600",
  },
  basket_product_box_price: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  basket_product_box_price_text: {
    fontSize: 15,
    fontWeight: "600",
    color: "#CAA171",
  },
  basket_footer: {
    marginBottom: 10,
  },
  basket_footer_line: {
    height: 1,
    backgroundColor: "#ADD1DC",
    alignItems: "center",
    marginHorizontal: "3%",
    marginVertical: "3%",
  },
  basket_footer_button: {
    backgroundColor: "#F0DFA0",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "25%",
    padding: "3%",
  },
  basket_footer_button_text: {
    color: "#795E35",
    fontSize: 15,
    fontWeight: "700",
  },
  basket_footer_text_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "3%",
    paddingVertical: "5%",
  },
  basket_footer_text: {
    color: "#322F2F",
    fontSize: 14,
    fontWeight: "600",
  },
  basket_footer_text_total: {
    color: "#CAA171",
    fontSize: 20,
    fontWeight: "600",
  },
});

export default styles;
