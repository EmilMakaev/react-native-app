import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import AppUserData from '../components/appUserData'

export default HomeScreen = () => {
  const [showUsers, setShow] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        setData(json)
      })
      .catch((error) => console.error(error))
  });

  return (
    <View style={ styles.container }>
      <Button
        title='Show Users'
        onPress={() => setShow(!showUsers)} 
      />
      {showUsers ? null : (
        <AppUserData usersData={data} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 60
  }
})