import React from 'react'
import { Image } from 'expo-image'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import FilterImg from '../../assets/icons/filter.svg'

const Filters = () => {
  return (
    <View style={ styles.btn_container }>
      <TouchableOpacity style={ styles.btn }>
        <Image source={ FilterImg } style={ styles.btn_icon } />
        <Text style={ styles.btn_txt }>Chronological</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[ styles.btn, styles.btn_margin ]}>
        <Image source={ FilterImg } style={ styles.btn_icon } />
        <Text style={ styles.btn_txt }>Grouped</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ styles.btn }>
        <Image source={ FilterImg } style={ styles.btn_icon } />
        <Text style={ styles.btn_txt }>Summary</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  btn_container: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    height: 50,
    margin: 4,

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
    overflow: 'hidden'
  },
  btn: {
    flex: 1,
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#9F9C9D',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  btn_margin: {
    marginHorizontal: 4
  },
  btn_txt: {
    fontSize: 12,
    color: '#fff'
  },
  btn_icon: {
    height: 12,
    width: 12
  }
})

export default Filters