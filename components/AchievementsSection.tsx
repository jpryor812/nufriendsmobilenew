import React from 'react';
import { View, StyleSheet } from 'react-native';
import MessageAchievement from './MessageAchievement';
import StreakAchievement from './StreakAchievement';
import MutualFriendAchievement from './MutualFriendAchievement';

const AchievementsSection = () => {
  return (
    <View style={styles.achievementsContainer}>
      {/* Messages Row */}
      <View style={styles.achievementsRow}>
        <MessageAchievement count={100} isLocked={false} />
        <MessageAchievement count={500} isLocked={false} />
        <MessageAchievement count={1000} isLocked={true} />
      </View>

      {/* Streaks Row */}
      <View style={styles.achievementsRow}>
        <StreakAchievement days={5} fireCount={1} isLocked={false} />
        <StreakAchievement days={10} fireCount={2} isLocked={true} />
        <StreakAchievement days={25} fireCount={3} isLocked={true} />
      </View>

      {/* Mutual Friends Row */}
      <View style={styles.achievementsRow}>
        <MutualFriendAchievement friends={2} handCount={1} isLocked={false} />
        <MutualFriendAchievement friends={5} handCount={2} isLocked={false} />
        <MutualFriendAchievement friends={10} handCount={3} isLocked={true} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    achievementsContainer: {
      padding: 12,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    achievementsRow: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 8,
    },
  });

export default AchievementsSection;