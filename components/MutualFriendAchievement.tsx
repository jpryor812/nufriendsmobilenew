import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import AchievementContainer from './AchievementContainer';

interface MutualFriendAchievementProps {
  friends: number;
  handCount: number;
  isLocked: boolean;
}

const MutualFriendAchievement: React.FC<MutualFriendAchievementProps> = ({ friends, handCount, isLocked }) => {
  const renderWavingHands = () => {
    return Array(handCount).fill(null).map((_, index) => {
      const imagePath = '../assets/images/hand_progress_bar.png';
      console.log(`Loading image at path: ${imagePath}`);
      return (
        <Image 
          key={index}
          source={require(imagePath)}
          style={[
            styles.wavingHandEmoji,
            index > 0 && styles.overlappingWavingHand
          ]}
        />
      );
    });
  };

  return (
    <AchievementContainer isLocked={isLocked}>
      <View style={styles.wavingHandContainer}>
        {renderWavingHands()}
      </View>
      <Text style={styles.achievementText}>
        {friends} Mutual Friends
      </Text>
    </AchievementContainer>
  );
};

const styles = StyleSheet.create({
  wavingHandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: -8, // Helps center the overlapping emojis
  },
  wavingHandEmoji: {
    width: 30,
    height: 30,
    marginBottom: 4,
  },
  overlappingWavingHand: {
    marginLeft: -10, // This creates the overlap effect
  },
  achievementText: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 12,
    color: '#42ade2',
    textAlign: 'center',
    paddingHorizontal: 4,
  },
});

export default MutualFriendAchievement;