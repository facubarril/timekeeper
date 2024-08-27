import React from 'react'
import { StyleSheet, Text, TextInput } from 'react-native';
import Constants from 'expo-constants';
import { View } from 'react-native';
import TimeViewer from './timeViewer';

const Header = ({ log, hasEntryToday, input, setInput, config }) => {
  return (
    <View style={ styles.header }>
      <View style={ styles.title_container }>
        <Text style={ styles.title }>
          TIME/Keeper
        </Text>
        <TimeViewer log={ log } hasEntryToday={ hasEntryToday } />
      </View>
      {
        !config
        && <TextInput
            multiline={ true }
            style={ styles.input }
            onChangeText={text => setInput(text)}
            value={ input }
            placeholder={"Enter a description..."}
            placeholderTextColor="#dfe7e899"
          />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    backgroundColor: '#151722',
    paddingTop: Constants.statusBarHeight + 10,
  },
  title_container: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
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
    marginBottom: 10,
    color: '#dfe7e8',
    alignSelf: "flex-start"
  }
})

export default Header