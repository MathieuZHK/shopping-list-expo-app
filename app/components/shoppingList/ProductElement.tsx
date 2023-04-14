import React from "react";
import { Pressable, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { StyleSheet } from "react-native";
import ShowProductOnShoppingListDto from "../../core/dtos/product/ShowProductOnShoppingListDto";
import SwipeableRow from "../common/SwipeableRow";

interface ProductElementProps {
  productOnShoppingList: ShowProductOnShoppingListDto;
  onUpdateProductElt: (product: ShowProductOnShoppingListDto) => void;
  onDeleteProductElt: (product: ShowProductOnShoppingListDto) => void;
  onClickProductElt: (productOnShoppingListId: string, inCart: boolean) => void;
}

const ProductElement = (props: ProductElementProps) => {

  const onDeleteAction = () => {
    props.onDeleteProductElt(props.productOnShoppingList);
  }

  const onUpdateAction = () => {
    props.onUpdateProductElt(props.productOnShoppingList);
  }

  return (
    <SwipeableRow onDeleteAction={onDeleteAction} onUpdateAction={onUpdateAction}>
      <View>
        <Pressable
        style={props.productOnShoppingList.inCart ? styles.rectButtonInCart : styles.rectButton}
          onPress={() => {
            props.productOnShoppingList.inCart
              ? props.onClickProductElt(props.productOnShoppingList.id, false)
              : props.onClickProductElt(props.productOnShoppingList.id, true);
          }}
        >
          <View className="flex flex-row justify-between align-middle ">
            <Text style={styles.fromText}>{props.productOnShoppingList.name}</Text>
            <Text>{props.productOnShoppingList.qty} qty</Text>
            <Text>{props.productOnShoppingList.price} Euro</Text>
          </View>
        </Pressable>
      </View>
    </SwipeableRow>
  );
};

const styles = StyleSheet.create({
  rectButton: {
    flex: 1,
    height: 80,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    flexDirection: "column",
    backgroundColor: "white",
  },
  rectButtonInCart: {
    flex: 1,
    height: 80,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    flexDirection: "column",
    backgroundColor: "grey",
  },
  separator: {
    backgroundColor: "rgb(200, 199, 204)",
    height: StyleSheet.hairlineWidth,
  },
  fromText: {
    fontWeight: "bold",
    backgroundColor: "transparent",
  },
  messageText: {
    color: "#999",
    backgroundColor: "transparent",
  },
  dateText: {
    backgroundColor: "transparent",
    position: "absolute",
    right: 20,
    top: 10,
    color: "#999",
    fontWeight: "bold",
  },
});


export default ProductElement;
