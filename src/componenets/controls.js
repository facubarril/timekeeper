import React from 'react'
import { Image } from 'expo-image'
import { View, TouchableOpacity, StyleSheet } from 'react-native'

import { startTracking, logTime } from '../utils/functions'

import PlayImg from '../../assets/icons/play.svg'
import PauseImg from '../../assets/icons/pause.svg'
import TrashImg from '../../assets/icons/trash-2.svg'

const Controls = ({ input, setInput, log, setLog }) => {
  return (
    <View style={ styles.btn_container }>
      {
        log.length === 0
        ? (
          <TouchableOpacity
            style={[ styles.btn, styles.start_btn ]}
            onPress={ () => startTracking(log, setLog) }
          >
            <Image source={ PlayImg } style={ styles.btn_icon } />
          </TouchableOpacity>
        )
        : (
          <>
            <TouchableOpacity
              style={[ styles.btn, styles.secc_btn ]}
              onPress={ () => null }
            >
              <Image source={ TrashImg } style={ styles.btn_icon } />
            </TouchableOpacity>
            <TouchableOpacity
              style={[ styles.btn, styles.main_btn ]}
              onPress={ () => logTime(input, setInput, log, setLog) }
            >
              <Image source={ PauseImg } style={ styles.btn_icon } />
            </TouchableOpacity>
          </>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  btn_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
    marginBottom: 4,

    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: 'hidden'
  },
  btn_icon: {
    height: 25,
    width: 25
  },
  btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    height: 80,
    width: '100%',
  },
  start_btn: {
    backgroundColor: '#50b2c0'
  },
  main_btn: {
    marginLeft: 4,
    borderBottomLeftRadius: 4,
    width: '80%',
    backgroundColor: '#FF4000'
  },
  secc_btn: {
    width: '20%',
    borderBottomRightRadius: 4,
    backgroundColor: '#201E1F'
  }
})

export default Controls