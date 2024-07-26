import { Image } from 'expo-image'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'

import { startTracking, logTime } from '../utils/functions'

import PlayIcon from '../../assets/icons/play.svg'
import PauseIcon from '../../assets/icons/pause.svg'
import SettingsIcon from '../../assets/icons/settings.svg'
import SaveIcon from '../../assets/icons/save.svg'

const Controls = ({ input, setInput, log, setLog, config, setConfig }) => {
  return (
    <View style={ styles.btn_container }>
      {
        <>
          {
            !config
            ? (
              <TouchableOpacity
                style={[ styles.btn, log.length === 0 ? styles.start_btn : styles.main_btn ]}
                onPress={ () => log.length === 0 ? startTracking(log, setLog) : logTime(input, setInput, log, setLog) }
              >
                <Image source={ log.length === 0 ? PlayIcon : PauseIcon } style={ styles.btn_icon } />
              </TouchableOpacity>
            )
            : (
              <TouchableOpacity
                style={[ styles.btn, log.length === 0 ? styles.start_btn : styles.main_btn ]}
                onPress={ () =>null }
              >
                <Image source={ SaveIcon } style={ styles.btn_icon } />
              </TouchableOpacity>
            )
          }
          <TouchableOpacity
            style={[ styles.btn, styles.secc_btn ]}
            onPress={ () => setConfig(!config) }
          >
            <Image source={ SettingsIcon } style={ styles.btn_icon } />
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
    width: '80%'
  },
  start_btn: {
    backgroundColor: '#50b2c0'
  },
  main_btn: {
    marginLeft: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: '#FF4000'
  },
  secc_btn: {
    width: '20%',
    marginLeft: 'auto',
    borderBottomRightRadius: 4,
    backgroundColor: '#201E1F'
  }
})

export default Controls