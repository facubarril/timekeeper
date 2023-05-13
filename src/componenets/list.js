import { useState, useEffect } from 'react'
import { StyleSheet, Text, FlatList, View } from 'react-native';
import Filters from './filters';


const List = ({ log }) => {

  const deff = []
  const [ data, setData ] = useState(deff)

  useEffect(() => {
    updateData()
  }, [ log ])

  const updateData = () => {
    setData(deff)
    log.forEach((item, i) => {
      if (i === 0) return

      const lastStringTime = log[i-1].split(': ')[0],
            itemStringTime = item.split(': ')[0],
            itemName = item.split(': ').slice(1).join(': ').trim();

      const lastTime = new Date(lastStringTime),
            itemTime = new Date(itemStringTime);

      const diff = itemTime - lastTime,
            segs = Math.floor(diff / 1000),
            mins = Math.floor(segs / 60),
            hrs = Math.floor(mins / 60);

      const fMins = (mins % 60).toString().padStart(2, '0'),
            fHrs = hrs.toString().padStart(2, '0'),
            elapsed = `${fHrs}:${fMins}`;

      setData((data) => [ ...data, `${itemName}%%${elapsed}` ])
    })
  }

  return (
    <>
      <FlatList
        style={ styles.list_container }
        data={ data }
        renderItem={({item}) => {
          return (
            <View style={ styles.list_item_container }>
              <Text style={[ styles.list_item_text, styles.list_item_flex ]}>{item.split('%%')[0]}</Text>
              <Text style={ styles.list_item_text }>{item.split('%%')[1]}</Text>
            </View>
          )
        }}
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
    paddingHorizontal: 20,
    marginTop: 10
  },
  list_item_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 10
  },
  list_item_text: {
    fontSize: 18,
    lineHeight: 26,
    color: '#dfe7e8'
  },
  list_item_flex: {
    flex: 1
  }
});


export default List