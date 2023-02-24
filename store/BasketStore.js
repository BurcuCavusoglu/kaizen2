import { action, makeAutoObservable, observable } from "mobx";
import { Alert } from "react-native";

class BasketStore {
  basketTotal = 0;
  basketItems = [];
  userPoint = 50000;
  constructor() {
    makeAutoObservable(this, {
      basketItems: observable,
      basketTotal: observable,
      userPoint: observable,
      addOrRemoveFromBasket: action,
    });
  }

  addOrRemoveFromBasket(item, type) {
    let newArray = [...this.basketItems];
    let newUserPoint = this.userPoint;
    let newTotal = this.basketTotal;
    let inBasket = newArray.findIndex((x) => x.ProductID === item.ProductID);
    if (type === "add") {
      if (item.Point <= newUserPoint) {
        if (inBasket > -1) {
          newArray[inBasket].adet += 1;
        } else {
          newArray.push({ ...item, adet: 1 });
        }
        newUserPoint -= item.Point;
        newTotal += item.UnitPrice;
      } else {
        Alert.alert("Bakiyeniz Yetersiz!");
      }
    } else {
      if (newArray[inBasket].adet === 1) {
        newArray.splice(inBasket, 1);
      } else {
        newArray[inBasket].adet -= 1;
      }
      newUserPoint += item.Point;
      newTotal -= item.UnitPrice;
    }
    this.basketItems = newArray;
    this.userPoint = newUserPoint;
    this.basketTotal = newTotal.toFixed(2)*1;
  }
}
export const basketStore = new BasketStore();
