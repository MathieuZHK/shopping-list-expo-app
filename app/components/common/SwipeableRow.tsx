import React from "react";
import { Animated, StyleSheet, I18nManager, View } from "react-native";
import { GestureHandlerRootView, RectButton, Swipeable } from "react-native-gesture-handler";
import  Icon from "react-native-vector-icons/MaterialCommunityIcons";


interface SwipeableRowProps {
    children: any;
    onDeleteAction: () => void;
    onUpdateAction: () => void;
}

const SwipeableRow =(props: SwipeableRowProps) => {

    const renderLeftActions = (
        _progress: Animated.AnimatedInterpolation<number>,
        dragX: Animated.AnimatedInterpolation<number>
    ) => {
        const scale = dragX.interpolate({
            inputRange: [0, 80],
            outputRange: [0, 1],
            extrapolate: "clamp",
          });
          return (
            <RectButton style={styles.leftAction} onPress={() => {
              props.onUpdateAction();
              close();
            }}>
              <Animated.Text style={[styles.actionIcon, { transform: [{ scale }] }]}>
                <Icon name="update" size={30} color="#0d815a" />
              </Animated.Text>
            </RectButton>
          );
    };

    const renderRightActions = (
        _progress: Animated.AnimatedInterpolation<number>,
        dragX: Animated.AnimatedInterpolation<number>
      ) => {
        const scale = dragX.interpolate({
          inputRange: [-80, 0],
          outputRange: [1, 0],
          extrapolate: "clamp",
        });
        return (
          <RectButton style={styles.rightAction} onPress={() => {
            props.onDeleteAction();
            close(); }}>
            <Animated.Text style={[styles.actionIcon, { transform: [{ scale }] }]}>
              <Icon name="delete-outline" size={30} color="#fa0202" />
            </Animated.Text>
          </RectButton>
        );
      };

      let swipeableRow : Swipeable;
      const updateRef = (ref: Swipeable) => {
            swipeableRow = ref;
      }

      const close = () => {
        swipeableRow.close();
      }

    return (
        <GestureHandlerRootView>
          <Swipeable
            ref={updateRef}          
            friction={2}
            leftThreshold={80}
            enableTrackpadTwoFingerGesture
            rightThreshold={40}
            renderLeftActions={renderLeftActions}
            renderRightActions={renderRightActions}
          >
            {props.children}
          </Swipeable>
        </GestureHandlerRootView>
      );;
}
// TODO Tailwind migration
const styles = StyleSheet.create({
    leftAction: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
      flexDirection: I18nManager.isRTL ? "row" : "row-reverse",
    },
    actionIcon: {
      width: 50,
      marginHorizontal: 10,
      height: 50,
    },
    rightAction: {
      alignItems: "center",
      flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
      flex: 1,
      justifyContent: "flex-end",
    },
  });

  export default SwipeableRow;