import React, { Component, PropsWithChildren } from "react";
import { Animated, StyleSheet, I18nManager, View } from "react-native";

import {
  GestureHandlerRootView,
  RectButton,
} from "react-native-gesture-handler";

import Swipeable from "react-native-gesture-handler/Swipeable";

//const AnimatedView = Animated.createAnimatedComponent(View);

export default class GmailStyleSwipeableRow extends Component<
  PropsWithChildren<unknown>
> {
  private renderLeftActions = (
    _progress: Animated.AnimatedInterpolation<number>,
    dragX: Animated.AnimatedInterpolation<number>
  ) => {
    const scale = dragX.interpolate({
      inputRange: [-80, 0],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });
    return (
      <RectButton style={styles.leftAction} onPress={this.close}>
        <Animated.Text style={[styles.actionIcon, { transform: [{ scale }] }]}>
          Update
        </Animated.Text>
      </RectButton>
    );
  };
  private renderRightActions = (
    _progress: Animated.AnimatedInterpolation<number>,
    dragX: Animated.AnimatedInterpolation<number>
  ) => {
    const scale = dragX.interpolate({
      inputRange: [-80, 0],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });
    return (
      <RectButton style={styles.rightAction} onPress={this.close}>
        <Animated.Text style={[styles.actionIcon, { transform: [{ scale }] }]}>
          Delete
        </Animated.Text>
      </RectButton>
    );
  };

  private swipeableRow?: Swipeable;

  private updateRef = (ref: Swipeable) => {
    this.swipeableRow = ref;
  };
  private close = () => {
    this.swipeableRow?.close();
  };
  render() {
    const { children } = this.props;
    return (
      <GestureHandlerRootView>
        <Swipeable
          ref={this.updateRef}
          
          friction={2}
          leftThreshold={80}
          enableTrackpadTwoFingerGesture
          rightThreshold={40}
          renderLeftActions={this.renderLeftActions}
          renderRightActions={this.renderRightActions}
        >
          {children}
        </Swipeable>
      </GestureHandlerRootView>
    );
  }
}

const styles = StyleSheet.create({
  leftAction: {
    flex: 1,
    backgroundColor: "#388e3c",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: I18nManager.isRTL ? "row" : "row-reverse",
  },
  actionIcon: {
    width: 30,
    marginHorizontal: 10,
    backgroundColor: "plum",
    height: 20,
  },
  rightAction: {
    alignItems: "center",
    flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
    backgroundColor: "#dd2c00",
    flex: 1,
    justifyContent: "flex-end",
  },
});
