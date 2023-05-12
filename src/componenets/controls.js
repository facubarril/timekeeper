import React from 'react'
import { Image } from 'expo-image'
import { View, TouchableOpacity, StyleSheet } from 'react-native'

import PlayImg from '../../assets/icons/play.svg'
import PauseImg from '../../assets/icons/pause.svg'
import TrashImg from '../../assets/icons/trash-2.svg'

const startTimer = (timer, setTimer) => {
  setTimer({ ...timer, startTime: new Date() })
}

const ignoreTask = (setTimer) => {
  let endTime = new Date()
  setTimer({ startTime: endTime, input: '' })
}

const restartTimer = (setTimer, timer, log, setLog) => {
  let endTime = new Date(),
      timeDiff = endTime - timer.startTime
      timeDiff /= 1000

  const secs = Math.round(timeDiff),
        mins = Math.round(secs / 60),
        hours = Math.round(secs / 3600),
        logName = timer.input === '' ? `Log ${ log.length + 1 }` : timer.input

  setLog((log) => [ ...log, `${logName} - ${hours}:${mins}`])
  setTimer({ startTime: endTime, input: '' })
}

const Controls = ({ timer, setTimer, log, setLog }) => {
  return (
    <View style={ styles.btn_container }>
      {
        timer.startTime === null
        ? (
          <TouchableOpacity
            style={[ styles.btn, styles.start_btn ]}
            onPress={ () => startTimer(timer, setTimer) }
          >
            <Image
              source={ PlayImg }
              style={ styles.btn_icon }
            />
          </TouchableOpacity>
        )
        : (
          <>
            <TouchableOpacity
              style={[ styles.btn, styles.secc_btn ]}
              onPress={ () => ignoreTask(setTimer) }
            >
              <Image
                source={ TrashImg }
                style={ styles.btn_icon }
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[ styles.btn, styles.main_btn ]}
              onPress={ () => restartTimer(setTimer, timer, log, setLog) }
            >
              <Image
                source={ PauseImg }
                style={ styles.btn_icon }
              />
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