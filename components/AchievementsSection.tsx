import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import MessageAchievement from './MessageAchievement';
import StreakAchievement from './StreakAchievement';
import MutualFriendAchievement from './MutualFriendAchievement';

const AchievementsSection = () => {
  return (
    <View>
      <Text style={styles.header}>Achievements</Text>
      <ScrollView 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* Messages Group */}
        <View style={styles.achievementGroup}>
          <MessageAchievement count={100} isLocked={false} />
          <View style={styles.horizontalLine} />
          <MessageAchievement count={500} isLocked={false} />
          <View style={styles.horizontalLine} />
          <MessageAchievement count={1000} isLocked={true} />
        </View>

        {/* Streaks Group */}
        <View style={styles.achievementGroup}>
          <StreakAchievement days={5} fireCount={1} isLocked={false} />
          <View style={styles.horizontalLine} />
          <StreakAchievement days={10} fireCount={2} isLocked={true} />
          <View style={styles.horizontalLine} />
          <StreakAchievement days={25} fireCount={3} isLocked={true} />
        </View>

        {/* Mutual Friends Group */}
        <View style={styles.achievementGroup}>
          <MutualFriendAchievement friends={2} handCount={1} isLocked={false} />
          <View style={styles.horizontalLine} />
          <MutualFriendAchievement friends={5} handCount={2} isLocked={false} />
          <View style={styles.horizontalLine} />
          <MutualFriendAchievement friends={10} handCount={3} isLocked={true} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    scrollContainer: {
      paddingHorizontal: 10,
      flexDirection: 'column',
      alignItems: 'center',
      paddingVertical: 12,
    },
    achievementGroup: {
      padding: 10,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center', 
      gap: 6, 
      marginLeft: '12%',
    },
    header: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 5,
    },
    horizontalLine: {
      width: '10%',     // Make the line wider
      height: 1,        // Make the line thinner
      backgroundColor: '#ddd',
      marginHorizontal: 1,
    },
});

export default AchievementsSection;