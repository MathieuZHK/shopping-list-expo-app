import { FlashList } from "@shopify/flash-list";
import React from "react";
import { SafeAreaView, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Divider, IconButton, Text } from "react-native-paper";
import ShowProductOnShoppingListDto from "../../core/dtos/product/ShowProductOnShoppingListDto";
import ProductElement from "./ProductElement";
import { useAuth } from "../../core/context/Auth";

interface ProductListProps {
  productListElements: ShowProductOnShoppingListDto[];
  onUpdateProductElt: (product: ShowProductOnShoppingListDto) => void;
  onDeleteProductElt: (product: ShowProductOnShoppingListDto) => void;
  onClickProductElt: (productOnShoppingListId: string, inCart: boolean) => void;
}

const ProductList = (props: ProductListProps) => {
  const signOut = useAuth();
  const separator = () => {
    return <Divider bold={true} />;
  };

  return (
    <SafeAreaView className="flex-1">
      <FlashList
        data={props.productListElements}
        ListEmptyComponent={
          <View className="flex items-center align-middle">
            <Text>Empty list</Text>
          </View>
        }
        ItemSeparatorComponent={separator}
        renderItem={({ item }) => (
          <ProductElement
            productOnShoppingList={item}
            onClickProductElt={props.onClickProductElt}
            onUpdateProductElt={props.onUpdateProductElt}
            onDeleteProductElt={props.onDeleteProductElt}
          />
        )}
        estimatedItemSize={50}
      />
    </SafeAreaView>
  );
};

export default ProductList;
