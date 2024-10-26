import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import HeaderButtons from '../components/HeaderButtons';
import FriendProfileVertical from '../components/FriendProfileVertical';
import DatingToggle from '../components/DatingToggle';
import MessagesChart from '../components/MessagesChart';
import ActiveStreaks from '../components/ActiveStreaks';
import StatsBar from '../components/UserStatsContainer';
import AchievementsSection from '@/components/AchievementsSection';


const ProfilePage = () => {

  const handleFindFriends = () => {
    console.log('Find friends');
  };

  const handleUpgrade = () => {
    console.log('Upgrade');
  };

  return (
    <SafeAreaView style={styles.container}>
        <HeaderButtons 
          onPressFindFriends={handleFindFriends}
          onPressUpgrade={handleUpgrade}
        />
      <View style={styles.friendProfileContainer}>
        <FriendProfileVertical 
          imageSource={require('../assets/images/profile_picture.jpg')} 
          name="Jpp123" 
          onPress={() => console.log('Friend profile pressed')}
        />
        <DatingToggle />
      </View>
      <View style={styles.chartContainer}>
        <MessagesChart />
      </View>
      <StatsBar />
      <ActiveStreaks />
      <AchievementsSection />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FCFE', // Match your app's background color
  },
  friendProfileContainer: {
    marginTop: 5,
    alignItems: 'center',
  },
  chartContainer: {
    backgroundColor: '#F0FCFE'
  },
});

export default ProfilePage;