import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, Image, SafeAreaView, Button } from 'react-native';
import { AppPhotoData } from '../components/appPhotoData';
import { AppFilteredPhotoData } from '../components/appFilteredPhotoData';

export default SignInScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [isFilter, setFilter] = useState(true);
  const [data, setData] = useState([]);
  const [filteredData, setFilterData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  });

  const FilterByAlbumId = () => {
    const newData = data.filter(el => el.albumId === 6)
    setFilterData(newData)
    setFilter(!isFilter)
  }

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? <ActivityIndicator/> : (
        <View>
          <Button title="Filter by albumId 6" onPress={FilterByAlbumId} />
          {isFilter ? <AppPhotoData photosData={data} /> : <AppFilteredPhotoData filteredData={filteredData} />}
        </View>
      )}
    </SafeAreaView>
  );
};

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