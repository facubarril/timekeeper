import React from 'react'
import { StyleSheet, Text, TextInput } from 'react-native';
import Constants from 'expo-constants';
import { View } from 'react-native';

const Header = ({ timer, setTimer }) => {
  return (
    <View style={ styles.header }>
      <Text style={ styles.title }>
        TIME/Keeper
      </Text>
      <TextInput
        multiline={ true }
        style={ styles.input }
        onChangeText={text => setTimer({ ...timer, input: text})}
        value={ timer.input }
        placeholder={"Enter description..."}
        placeholderTextColor="#dfe7e8"
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