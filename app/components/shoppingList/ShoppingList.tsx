import { FlashList } from "@shopify/flash-list";
import React from "react";
import { SafeAreaView, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Divider, IconButton, Text } from "react-native-paper";
import { useAuth } from "../../core/context/Auth";
import ShowShoppingListDto from "../../core/dtos/shoppingList/ShowShoppingListDto";
import SwipeableRow from "../common/SwipeableRow";
import ShoppingListElement from "./ShoppingListElement";

interface ShoppingListProps {
  shoppingListElements: ShowShoppingListDto[];
  onDeleteShoppingElt: (shoppingListElements: ShowShoppingListDto) => void;
  onUpdateShoppingElt: (shoppingListElt: ShowShoppingListDto) => void;
  onClickShoppingElt: (shoppingListElements: ShowShoppingListDto) => void;
}

const ShoppingList = (props: ShoppingListProps) => {
  const signOut = useAuth();

  const separator = () => {
    return <Divider bold={true} />;
  };

  return (
    <SafeAreaView className="flex-1">
      <FlatList
        data={props.shoppingListElements}
        ListHeaderComponent={
          <View className="mb-5 p-5 flex flex-row justify-between items-center">
            <Text className="font-bold text-center" variant="displaySmall">
              Shopping lists
            </Text>
            <IconButton
              icon="logout-variant"
              size={45}
              iconColor="purple"
              onPress={() => {
                signOut.signOut();
              }}
            />
          </View>
        }
        ListEmptyComponent={
          <View className="flex items-center align-middle">
            <Text>Empty list</Text>
          </View>
        }
        ItemSeparatorComponent={separator}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ShoppingListElement
            shoppingListElt={item}
            onDeleteShoppingElt={props.onDeleteShoppingElt}
            onUpdateShoppingElt={props.onUpdateShoppingElt}
            onClickShoppingElt={props.onClickShoppingElt}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default ShoppingList;
