import React from 'react'
import { StyleSheet, Text, FlatList } from 'react-native';
import Filters from './filters';



const List = ({ log }) => {

  return (
    <>
      <FlatList
        style={ styles.list_container }
        data={ log }
        renderItem={({item}) => <Text style={ styles.list_text }>{item}</Text>}
        keyExtractor={ item => item }
      />
      <Filters />
    </>
  )
}

const styles = StyleSheet.create({
  list_container: {
    flex: 1,
    width: '100%',
    padding: 20
  },
  list_text: {
    fontSize: 18,
    color: '#dfe7e8'
  }
});


export default List