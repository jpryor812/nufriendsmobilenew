import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

type StreakItemProps = {
  streak: number;
  name: string;
};

const StreakItem: React.FC<StreakItemProps> = ({ streak, name }) => (
  <View style={styles.streakItem}>
    <View style={styles.leftContainer}>
      <Text style={styles.fireEmoji}>🔥</Text>
      <Text style={styles.streakNumber}>{streak} days</Text>
    </View>
    <View style={styles.rightContainer}>
      <View style={styles.blueCircle} />
      <Text style={styles.name}>{name}</Text>
    </View>
  </View>
);

const ActiveStreaks: React.FC = () => {
  const streaks = [
    { streak: 17, name: 'PChak55' },
    { streak: 11, name: 'AlexD33' },
    { streak: 8, name: 'OnDeck02' },
    // Add more streak data as needed
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Active Streaks</Text>
      {streaks.map((item, index) => (
        <StreakItem key={index} {...item} />
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 5,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  streakItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100, // Fixed width for alignment
    marginRight: 40,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 40,
  },
  fireEmoji: {
    fontSize: 18,
    marginRight: 10,
  },
  streakNumber: {
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 10,
    width: 80, // Fixed width for alignment
  },
  blueCircle: {
    width: 20,
    height: 20,
    borderRadius: 15,
    backgroundColor: 'blue',
    marginRight: 10,
  },
  name: {
    fontSize: 15,
  },
});

export default ActiveStreaks;