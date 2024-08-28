import { useState } from 'react'
import { StyleSheet, Text, TextInput, FlatList, TouchableOpacity, ScrollView, Modal } from 'react-native';
import Constants from 'expo-constants';
import { View } from 'react-native';
import TimeViewer from './timeViewer';

const Header = ({ data, log, hasEntryToday, input, setInput, config }) => {

  const [filteredData, setFilteredData] = useState([]);

  const handleInputChange = (text) => {
    setInput(text);

    if (text && text.length > 1) {
      const filtered = data.filter(item =>
        item.split(': ')[1].toLowerCase() !== 'start' && item.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  };

  const handleAutocompleteSelect = (selectedItem) => {
    setInput(selectedItem);
    setFilteredData([]);
  };

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
        && (
          <>
            <TextInput
              multiline={ true }
              style={[ styles.input, filteredData.length === 0 && styles.input_m ]}
              onChangeText={ handleInputChange }
              value={ input }
              placeholder={"Enter a description..."}
              placeholderTextColor="#dfe7e899"
            />
            {
              filteredData.length > 0 && (
                <FlatList
                  data={ filteredData }
                  renderItem={({ item }) => (
                    <TouchableOpacity style={ styles.autocomplete_item } onPress={() => handleAutocompleteSelect( item.split(': ')[1] )}>
                      <Text style={ styles.autocomplete_item_text }>{ item.split(': ')[1] }</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={ (item, index) => index.toString() }
                  style={ styles.autocomplete_list }
                />
              )
            }
          </>
        )
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
    color: '#dfe7e8',
    alignSelf: "flex-start"
  },
  input_m: {
    marginBottom: 10
  },
  autocomplete_list: {
    height: '22%',
    paddingLeft: 10,
    paddingBottom: 5
  },
  autocomplete_item: {
    fontSize: 16,
    lineHeight: 26,
    paddingVertical: 8,
    color: '#dfe7e8'
  },
  autocomplete_item_text: {
    fontSize: 16,
    lineHeight: 26,
    color: '#dfe7e8'
  },
})

export default Header