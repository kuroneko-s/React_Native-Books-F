import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import FeedsItemComponent from './FeedsItemComponent';

function FeedsListComponent({}) {
  const feeds = Array.from({length: 15}, (_, index) => ({
    id: index,
    title: `Test ${index}`,
    body: `Test ${index}`,
    date: new Date().toISOString(),
  }));

  return (
    <FlatList
      data={feeds}
      keyExtractor={item => item.id}
      renderItem={({item}) => <FeedsItemComponent feed={item} />}
      ItemSeparatorComponent={() => <View style={styes.separator} />}
    />
  );
}

const styes = StyleSheet.create({
  separator: {
    height: 2,
    backgroundColor: '#b2bec3',
  },
});

export default FeedsListComponent;
