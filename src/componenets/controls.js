import { Image } from 'expo-image'
import { View, TouchableOpacity, StyleSheet } from 'react-native'

import { startTracking, logTime } from '../utils/functions'

import PlayIcon from '../../assets/icons/play.svg'
import PauseIcon from '../../assets/icons/pause.svg'
import SettingsIcon from '../../assets/icons/settings.svg'
import ReturnIcon from '../../assets/icons/return.svg'

const Controls = ({ input, setInput, log, setLog, hasEntryToday, setNewEntry, config, setConfig }) => {

  const handleLogTime = () => logTime(input, setInput, log, setLog, setNewEntry)
  const handleStartTracking = () => startTracking(log, setLog, setNewEntry)

  return (
    <View style={ styles.btn_container }>
      {
        <>
          {
            <TouchableOpacity
              style={[ styles.btn, !hasEntryToday ? styles.start_btn : styles.main_btn ]}
              onPress={ () => !hasEntryToday ? handleStartTracking() : handleLogTime() }
            >
              <Image source={ !hasEntryToday ? PlayIcon : PauseIcon } style={ styles.btn_icon } />
            </TouchableOpacity>
          }
          <TouchableOpacity
            style={[ styles.btn, styles.secc_btn ]}
            onPress={ () => setConfig(!config) }
          >
            {
              !config
                ? <Image source={ SettingsIcon } style={ styles.btn_icon } />
                : <Image source={ ReturnIcon } style={ styles.btn_icon } />
            }
          </TouchableOpacity>
        </>
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
    width: '66%'
  },
  start_btn: {
    backgroundColor: '#50b2c0'
  },
  main_btn: {
    borderBottomLeftRadius: 4,
    backgroundColor: '#FF4000'
  },
  secc_btn: {
    width: '33%',
    marginLeft: 'auto',
    borderBottomRightRadius: 4,
    backgroundColor: '#201E1F',
    marginLeft: 2
  }
})

export default Controls