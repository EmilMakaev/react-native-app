import React from 'react';
import { FlatList, SafeAreaView, Text, View, StyleSheet } from 'react-native';

export default AppUserData = ( {usersData} ) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={usersData}
          renderItem={({item}) => 
            <Text>{item.address.street}: {item.address.suite} - {item.company.name}</Text>}
          keyExtractor={({id}, index) => id.toString()}
        />
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 40
  }
});