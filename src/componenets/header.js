import React from 'react'
import { StyleSheet, Text, TextInput } from 'react-native';
import Constants from 'expo-constants';
import { View } from 'react-native';

const Header = ({ input, setInput }) => {
  return (
    <View style={ styles.header }>
      <Text style={ styles.title }>
        TIME/Keeper
      </Text>
      <TextInput
        multiline={ true }
        style={ styles.input }
        onChangeText={text => setInput(text)}
        value={ input }
        placeholder={"Enter a description..."}
        placeholderTextColor="#dfe7e899"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    backgroundColor: '#151722',
    paddingTop: Constants.statusBarHeight + 10,
  },
  title: {
    fontWeight: '700',
    letterSpacing: .6,
    fontSize: 16,
    color: "#dfe7e8"
  },
  input: {
    fontSize: 36,
    paddingVertical: 6,
    marginVertical: 10,
    color: '#dfe7e8',
    alignSelf: "flex-start"
  }
})

export default Header