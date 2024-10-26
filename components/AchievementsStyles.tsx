import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  achievementContainerAndLine: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  achievementContainer: {
    width:90,
    height: 95,
    borderWidth: 7,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fdfdfd',
    marginBottom: 16,
  },
  achievementSuccess: {
    borderColor: '#ffde66',
  },
  achievementLocked: {
    borderColor: '#dedede',
  },
  verticalLine: {
    width: 2,
    height: 40,
    backgroundColor: '#e5e5e5',
    marginTop: -8,
    marginBottom: 8,
  },
  trophyIcon: {
    position: 'absolute',
    top: -15,
    right: -10,
    width: 25,
    height: 25,
  },
});

export default styles;