import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const StatsBar = () => {
  const stats = [
    { number: '34', label: 'New Friends This Month' },
    { number: '139', label: 'Total Friends' },
    { number: '422', label: 'Messages Sent This Month' },
    { number: '1,698', label: 'Total Messages Sent' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {stats.map((stat, index) => (
        <React.Fragment key={stat.label}>
          {index > 0 && <View style={styles.separator} />}
          <View style={styles.statBlock}>
            <Text style={styles.statNumber}>{stat.number}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
        </React.Fragment>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 0,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3, // Adjust the opacity for a lighter shadow
    shadowRadius: 5, // Adjust the radius for a softer shadow
    elevation: 3, // Add elevation for Android shadow
  },
  statBlock: {
    alignItems: 'center',
    marginRight: 5,
    marginLeft: 5,
  },
  statNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 4,
    marginLeft: 4,
    marginTop: 10,
  },
  statLabel: {
    fontSize: 11,
    color: '#888',
    marginTop: 2,
    marginBottom: 10,
    marginRight: 2,
    marginLeft: 2,
    width: 80,
    textAlign: 'center',
  },
  separator: {
    width: 1,
    height: '100%',
    backgroundColor: '#e0e0e0',
  },
});

export default StatsBar;