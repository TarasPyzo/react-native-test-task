import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import styles from './styles';

export default class AnimatedCircle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstScaledAnimation: new Animated.Value(0.5),
      firstOpacityAnimation: new Animated.Value(1),
      secondScaledAnimation: new Animated.Value(0),
      secondOpacityAnimation: new Animated.Value(1),
    };
  }

  componentDidMount() {
    const {
      firstScaledAnimation, firstOpacityAnimation, secondScaledAnimation, secondOpacityAnimation,
    } = this.state;
    const firstLoop = Animated.loop(Animated.parallel([
      Animated.timing(firstScaledAnimation, {
        toValue: 1,
        duration: 2000,
      }),
      Animated.timing(firstOpacityAnimation, {
        toValue: 0,
        duration: 4000,
      }),
    ]));
    const secondLoop = Animated.loop(Animated.parallel([
      Animated.timing(secondScaledAnimation, {
        toValue: 1,
        duration: 2000,
      }),
      Animated.timing(secondOpacityAnimation, {
        toValue: 0,
        duration: 4000,
      }),
    ]));
    Animated.stagger(1000, [firstLoop, secondLoop]).start();
  }

  render() {
    const {
      firstScaledAnimation, firstOpacityAnimation, secondScaledAnimation, secondOpacityAnimation,
    } = this.state;

    return (
      <View style={styles.circleContainer}>
        <Animated.View style={styles.smallestCircle}>
          <Animated.View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: 'rgba(127, 185, 0, 0.3)',
              transform: [
                {
                  scale: firstScaledAnimation,
                },
              ],
              opacity: firstOpacityAnimation,
            }}
          >
            <Animated.View
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                backgroundColor: 'rgba(127, 185, 0, 0.5)',
                transform: [
                  {
                    scale: secondScaledAnimation,
                  },
                ],
                opacity: secondOpacityAnimation,
              }}
            />
          </Animated.View>
        </Animated.View>
      </View>
    );
  }
}
