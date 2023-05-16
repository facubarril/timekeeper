import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { Image } from 'expo-image'

import PlayIcon from '../../assets/icons/play.svg'
import PauseIcon from '../../assets/icons/pause.svg'
import SettingsIcon from '../../assets/icons/settings.svg'
import FilterIcon from '../../assets/icons/filter.svg'

const Start = () => {
  return (
    <ScrollView style={ styles.start_container }>
      <Text style={ styles.start_text }>
        Wellcome to <Text style={ styles.bold }>TIME/Keeper</Text>{'\n'}
        This app helps you keep track of your elapsed time from the moment you start it. Simply tap {<Image source={ PlayIcon } style={ styles.btn_icon } />} to begin.{'\n\n'}
        The tracked time will be displayed at the top-right corner of your screen.{'\n\n'}
        Whenever you want to add a log with the current description and restart the tracking, just tap {<Image source={ PauseIcon } style={ styles.btn_icon } />}. You can enter a description at any time before adding the log.{'\n\n'}
        Once you have entries in your log, they will appear here. You can use the {<Image source={ FilterIcon } style={ styles.btn_icon } />} Filters to arrange them as needed.{'\n\n'}
        For app settings, adding recurrent task descriptions, and more, you can tap {<Image source={ SettingsIcon } style={ styles.btn_icon } />} at any time.{'\n\n'}
        Enjoy effortlessly managing your time!
      </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  start_container: {
    flex: 1,
    width: '100%',
    padding: 20
  },
  start_text: {
    fontSize: 16,
    lineHeight: 23,
    color: '#dfe7e8'
  },
  btn_icon: {
    height: 16,
    width: 16,
    verticalAlign: 'middle'
  },
  bold: {
    fontWeight: 700
  }
});

export default Start