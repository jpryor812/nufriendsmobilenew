import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, SafeAreaView } from 'react-native';
import Dropdown from '../components/DropdownMenu';
import FooterNavigation from '../components/FooterNavigation';
import HeaderButtons from '@/components/HeaderButtons';
import { Link } from "expo-router";

const profileIcon = require('../assets/images/profile_picture.jpg');

interface FriendItemProps {
  initials: string;
  name: string;
  hasStreak: boolean;
  primaryData: number;
  primaryLabel: string;
}

const FriendItem: React.FC<FriendItemProps> = ({ initials, name, hasStreak, primaryData, primaryLabel }) => (
  
  <SafeAreaView style={styles.friendItem}>
    <View style={styles.avatarContainer}>
      {hasStreak && <Text style={styles.fireEmoji}>🔥</Text>}
      <View>
        <Image 
          source={profileIcon}
          style={styles.avatarImage}
        />
      </View>
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.dataCount}>{primaryData} {primaryLabel}</Text>
    </View>
  </SafeAreaView>
);

const FriendPage: React.FC = () => {
  const [sortOption, setSortOption] = useState('messagesMost');
  const [primaryDataLabel, setPrimaryDataLabel] = useState('messages');
  const [friends, setFriends] = useState([
    { id: 1, initials: 'JP', name: 'Jpp123', messages: 1456, daysAsFriends: 120, streak: 9, mutualFriends: 10 },
    { id: 2, initials: 'JP', name: 'App123', messages: 964, daysAsFriends: 90, streak: 5, mutualFriends: 8 },
    { id: 3, initials: 'JP', name: 'Bpp123', messages: 456, daysAsFriends: 60, streak: 0, mutualFriends: 5 },
    { id: 4, initials: 'JP', name: 'Zpp123', messages: 356, daysAsFriends: 30, streak: 4, mutualFriends: 3 },
    { id: 5, initials: 'JP', name: 'Xpp123', messages: 138, daysAsFriends: 15, streak: 2, mutualFriends: 2 },
  ]);

  const sortOptions = [
    { label: 'Messages (Most)', value: 'messagesMost' },
    { label: 'Messages (Least)', value: 'messagesLeast' },
    { label: 'Days as friends (Most)', value: 'daysAsFriendsMost' },
    { label: 'Days as friends (Least)', value: 'daysAsFriendsLeast' },
    { label: 'Longest active streaks', value: 'longestStreaks' },
    { label: 'Mutual friends (Most)', value: 'mutualFriendsMost' },
    { label: 'Mutual friends (Least)', value: 'mutualFriendsLeast' },
    { label: 'Name (A-Z)', value: 'nameAZ' },       
    { label: 'Name (Z-A)', value: 'nameZA' } 
];

  const sortFriends = (option: string) => {
    let sortedFriends = [...friends];
    let newPrimaryDataLabel = '';

    switch (option) {
      case 'messagesMost':
      case 'messagesLeast':
        sortedFriends.sort((a, b) => option === 'messagesMost' ? b.messages - a.messages : a.messages - b.messages);
        newPrimaryDataLabel = 'messages';
        break;
      case 'daysAsFriendsMost':
      case 'daysAsFriendsLeast':
        sortedFriends.sort((a, b) => option === 'daysAsFriendsMost' ? b.daysAsFriends - a.daysAsFriends : a.daysAsFriends - b.daysAsFriends);
        newPrimaryDataLabel = 'days as friends';
        break;
      case 'longestStreaks':
        sortedFriends.sort((a, b) => b.streak - a.streak);
        newPrimaryDataLabel = 'day streak';
        break;
      case 'mutualFriendsMost':
      case 'mutualFriendsLeast':
        sortedFriends.sort((a, b) => option === 'mutualFriendsMost' ? b.mutualFriends - a.mutualFriends : a.mutualFriends - b.mutualFriends);
        newPrimaryDataLabel = 'mutual friends';
        break;
      case 'nameAZ':
      case 'nameZA':
        sortedFriends.sort((a, b) => {
        const comparison = a.name.localeCompare(b.name);
        return option === 'nameAZ' ? comparison : -comparison;});
              newPrimaryDataLabel = primaryDataLabel; // Keep the current primary data label
              break;  
    }
    setFriends(sortedFriends);
    setPrimaryDataLabel(newPrimaryDataLabel);
  };

  return (
    <SafeAreaView style={styles.container}>
        <HeaderButtons 
          onPressFindFriends={() => console.log('Find Friends pressed')}
          onPressUpgrade={() => console.log('Upgrade pressed')}
        />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Friends</Text>
        <Dropdown
          options={sortOptions}
          selectedValue={sortOption}
          onSelect={(value) => {
            setSortOption(value);
            sortFriends(value);
          }}
        />
        <ScrollView style={styles.scrollView}>
          {friends.map((friend) => (
            <FriendItem
              key={friend.id}
              initials={friend.initials}
              name={friend.name}
              primaryData={friend[primaryDataLabel === 'messages' ? 'messages' : 
                     primaryDataLabel === 'days as friends' ? 'daysAsFriends' : 
                     primaryDataLabel === 'day streak' ? 'streak' : 'mutualFriends']}
              primaryLabel={primaryDataLabel}
              hasStreak={friend.streak > 0}
            />
          ))}
        </ScrollView>
      </View>
      <FooterNavigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FCFE',
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
  },
  friendItem: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    borderColor: '#F8FCFF',
    borderBottomWidth: 3,
    width: '92%',
    alignSelf: 'center',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 10,
    marginLeft: 4,
    marginBottom: 12,
    marginTop: 12,
  },
  fireEmoji: {
    position: 'absolute',
    top: -8,
    left: -8,
    fontSize: 20,
    zIndex: 5,
  },
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dataCount: {
    fontSize: 14,
    color: '#7f8c8d',
  },
});

export default FriendPage;