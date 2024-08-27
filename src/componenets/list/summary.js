import { FlatList, Text, View } from 'react-native';

const ListSummary = ({ styles }) => {
  return (
    <FlatList
      style={ styles.list_container }
      data={['Summary List']}
      renderItem={({index, item}) =>
        <View style={ styles.list_item_container }>
          <Text style={[ styles.list_item_text, styles.list_item_flex ]}>
              { item }
          </Text>
          <Text style={ styles.list_item_text }></Text>
        </View>
      }
      keyExtractor={(item, index) => index.toString()}
    />
  )
}

export default ListSummary