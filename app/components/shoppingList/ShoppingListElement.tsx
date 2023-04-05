import React from "react";
import { StyleSheet, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import ShowShoppingListDto from "../../core/dtos/shoppingList/ShowShoppingListDto";
import GmailStyleSwipeableRow from "../common/SwipeableRow";
import { SwipeListView } from "react-native-swipe-list-view";

interface ShoppingListElementProps {
  shoppingListElt: ShowShoppingListDto;
  onDeleteShoppingElt: (shoppingListElt: ShowShoppingListDto) => void;
  onUpdateShoppingElt: (shoppingListElt: ShowShoppingListDto) => void;
  onClickShoppingElt: (shoppingListElt: ShowShoppingListDto) => void;
}

const ShoppingListElement = (props: ShoppingListElementProps) => {
  const {
    onClickShoppingElt,
    onDeleteShoppingElt,
    onUpdateShoppingElt,
    shoppingListElt,
  } = props;

  return (
    <GmailStyleSwipeableRow>
      <RectButton
        style={styles.rectButton}
        onPress={() => {
          onClickShoppingElt(shoppingListElt);
        }}
      >
        <Text style={styles.fromText}>{shoppingListElt.name}</Text>
        <Text numberOfLines={2} style={styles.messageText}>
          {shoppingListElt.id}
        </Text>
        <Text style={styles.dateText}>{shoppingListElt.name}</Text>
      </RectButton>
    </GmailStyleSwipeableRow>
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

export default ShoppingListElement;
