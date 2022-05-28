import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

function Empty() {
  // require('../assets/images/circle.png')
  const url = {uri: 'https://via.placeholder.com/650'};

  return (
    <View style={styles.block}>
      <Image
        source={require('../images/young_and_happy.png')}
        style={styles.image}
        resizeMode="center"
      />
      <Text style={styles.description}>할일이 없습니다!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 24,
    color: '#9e9e9e',
  },
  image: {
    width: 240,
    height: 179,
    marginBottom: 16,
  },
});

export default Empty;