import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Animated, Platform, UIManager, Image } from 'react-native';
import ProgressBar from '../components/ProgressBar';
import BigYuOnboarding from '../components/BigYuOnboarding';
import ChatBubble from '../components/ChatBubble'; 
import BigYuSearching from '../components/BigYuSearching';
import { Link } from 'expo-router';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(false);
  }
}

const OnboardingPage5 = () => {
  const slideOutAnim = useRef(new Animated.Value(0)).current;
  const slideUpAnim = useRef(new Animated.Value(300)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const chatBubbleFadeAnim = useRef(new Animated.Value(0)).current;
  const bubbleFadeAnim = useRef(new Animated.Value(0)).current;
  const firstImageVisible = useRef(true);

  useEffect(() => {
    // Reset all animations
    fadeAnim.setValue(0);
    slideUpAnim.setValue(300);
    slideOutAnim.setValue(0);
    chatBubbleFadeAnim.setValue(0);
    bubbleFadeAnim.setValue(0);

    const timer = setTimeout(() => {
      // First animation: slide out
      Animated.timing(slideOutAnim, {
        toValue: 400,
        duration: 800,
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (finished) {
          firstImageVisible.current = false;
          // Short delay before second animation
          setTimeout(() => {
            Animated.sequence([
              // First fade in the image
              Animated.parallel([
                Animated.timing(slideUpAnim, {
                  toValue: 0,
                  duration: 800,
                  useNativeDriver: true,
                }),
                Animated.timing(fadeAnim, {
                  toValue: 1,
                  duration: 800,
                  useNativeDriver: true,
                }),
              ]),
              // Then fade in chat bubble and bottom bubble together
              Animated.parallel([
                Animated.timing(chatBubbleFadeAnim, {
                  toValue: 1,
                  duration: 600,
                  useNativeDriver: true,
                }),
                Animated.timing(bubbleFadeAnim, {
                  toValue: 1,
                  duration: 600,
                  useNativeDriver: true,
                }),
              ]),
            ]).start();
          }, 800);
        }
      });
    }, 3000);

    return () => {
      clearTimeout(timer);
      // Reset animations on cleanup
      fadeAnim.setValue(0);
      slideUpAnim.setValue(300);
      slideOutAnim.setValue(0);
      chatBubbleFadeAnim.setValue(0);
      bubbleFadeAnim.setValue(0);
    };
  }, []);

  // Create an Animated version of ChatBubble
  const AnimatedChatBubble = Animated.createAnimatedComponent(ChatBubble);

  return (
    <View style={styles.appContainer}>
      <ProgressBar progress={25} />
      
      <View style={styles.newContentContainer}>
        {/* First component that slides out */}
        <Animated.View
          style={[
            styles.animatedContainer,
            {
              transform: [{ translateX: slideOutAnim }],
              zIndex: firstImageVisible.current ? 2 : 1,
            }
          ]}
        >
          <BigYuOnboarding text="After You Answer Some Questions to Help Us Get to Know You..." />
        </Animated.View>
  
        <Animated.View
          style={[
            styles.animatedContainer,
            {
              transform: [{ translateY: slideUpAnim }],
              opacity: fadeAnim,
              zIndex: firstImageVisible.current ? 1 : 2,
            }
          ]}
        >
          <BigYuSearching text="We'll Find Five Friends You'll Build a Connection With!" />
        </Animated.View>
  
        {/* Bottom bubble that fades in below image */}
        <Animated.View
          style={[
            styles.bubbleContainer,
            {
              opacity: bubbleFadeAnim,
            }
          ]}
        >
          <View style={styles.bubble}>
            <Text style={styles.bubbleText}>Let's get started!</Text>
          </View>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 0,
    backgroundColor: '#F0FCFE',
  },
  newContentContainer: {
    position: 'absolute',
    top: '14%',
    width: '100%',
    height: '70%', // Add height to contain absolute positioned children
    alignItems: 'center',
  },
  animatedContainer: {
    position: 'absolute',
    top: '8%', // Adjust this value as needed
    width: '100%',
    alignItems: 'center',
  },
  bubbleContainer: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    bottom: '40%', 
  },
  bubble: {
    backgroundColor: '#6ECFFF',
    borderRadius: 20,
    padding: 15,
    minWidth: 120,
    alignItems: 'center',
  },
  bubbleText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  YuSearching: {
    width: 160,
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OnboardingPage5;