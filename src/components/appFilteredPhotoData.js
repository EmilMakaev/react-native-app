import React from 'react';
import { FlatList, SafeAreaView, View, StyleSheet, Image } from 'react-native';

export function FilteredPhotos ( {filteredData} ) {
  return (
    <View>
      <SafeAreaView>
        <FlatList
          data={filteredData}
          keyExtractor={({ id }, index) => id.toString()}
          renderItem={({ item }) => <Image source={{ uri: item.thumbnailUrl }} style={styles.imageView} />}
        />
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  imageView: {
    width: 150,
    height: 150 ,
    margin: 7,
    borderRadius : 7
  }
});

export const AppFilteredPhotoData = React.memo(FilteredPhotos)