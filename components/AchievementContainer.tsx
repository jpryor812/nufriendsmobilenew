import React, { ReactNode } from 'react';
import { View, Image } from 'react-native';
import styles from './AchievementsStyles';  

// Define the props interface
interface AchievementContainerProps {
  children: ReactNode;
  isLocked: boolean;
}

const AchievementContainer: React.FC<AchievementContainerProps> = ({ children, isLocked }) => {
  return (
    <View style={styles.achievementContainerAndLine}>
      <View style={[
        styles.achievementContainer,
        isLocked ? styles.achievementLocked : styles.achievementSuccess
      ]}>
        {!isLocked && (
          <Image 
            source={require('../assets/images/trophy_emoji_progress_bar.png')}
            style={styles.trophyIcon}
          />
        )}
        {children}
      </View>
      <View style={styles.verticalLine} />
    </View>
  );
};

export default AchievementContainer;