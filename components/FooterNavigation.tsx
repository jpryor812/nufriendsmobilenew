import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link } from "expo-router";

const FooterNavigation = () => {
  return (
    <View style={styles.footer}>
      <Link href={"/HomePage"} 
      style={styles.footerItem}>
        <Image source={require('../assets/images/house_emoji.png')} style={styles.icon} />
      </Link>
      <Link href={"/ProfilePage"}
      style={styles.footerItem}>
        <Image source={require('../assets/images/profile_picture.jpg')} style={styles.profileicon} />
      </Link>
      <Link href={"/FriendPage"}
      style={styles.footerItem}>
        <Image source={require('../assets/images/hand_progress_bar.png')} style={styles.icon} />
      </Link>
      <Link href={"/MessagingYu"} 
      style={styles.footerItem}>
        <Image source={require('../assets/images/yu_progress_bar.png')} style={styles.Yuicon} />
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 2,
    borderTopColor: '#EBF7FE',
  },
  footerItem: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
    marginBottom: 1,

  },
  profileicon: {
    width: 30,
    height: 30,
    marginBottom: 1,
    borderRadius: 50,
  },
  Yuicon: {
    width: 34,
    height: 34,
    marginBottom: 1,
  },  
});

export default FooterNavigation;