import { FlatList, Text, View } from 'react-native';
import { getTimeDif } from '../../utils/functions';

const ListDefault = ({ log, styles }) => {

  let logData = []

  log.map((item, index) => {
    if (index === 0) return;

    const itemName = item.split(': ')[1].trim();

    const prevTime = log[index-1].split(': ')[0];
          itemStart = prevTime.split(' ')[1],
          itemStartTime = new Date(prevTime);

    const currTime = item.split(': ')[0],
          itemEnd = currTime.split(' ')[1],
          itemEndTime = new Date(currTime);

    logData.push({
      itemName,
      timeDif: `${getTimeDif(itemStartTime, itemEndTime)} / ${itemStart}-${itemEnd}`
    })
  })

  return (
    <FlatList
      style={ styles.list_container }
      data={ logData }
      renderItem={({item}) => {
        return (
          <View style={ styles.list_item_container }>
            <Text style={[ styles.list_item_text, styles.list_item_flex ]}>
              { item.itemName }
            </Text>
            <Text style={ styles.list_item_text }>
              { item.timeDif }
            </Text>
          </View>
        )
      }}
      keyExtractor={(item, index) => index.toString()}
    />
  )
}

export default ListDefault