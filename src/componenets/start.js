import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image'

import PlayImg from '../../assets/icons/play.svg'
import PauseImg from '../../assets/icons/pause.svg'
import TrashImg from '../../assets/icons/trash-2.svg'
import FilterImg from '../../assets/icons/filter.svg'

const Start = () => {
  return (
    <View style={ styles.start_container }>
      <Text style={ styles.start_text }>
        Wellcome to TIME/Keeper{'\n'}
        This app keeps tracking of your elapsed time from the moment you start it.{'\n\n'}
        Tap {<Image source={ PlayImg } style={ styles.btn_icon } />} to start tracking.{'\n'}
        Tap {<Image source={ PauseImg } style={ styles.btn_icon } />} to add a log with current description and restart the tracking.{'\n\n'}
        Once you have an entry on your log, you will see it here. Use {<Image source={ FilterImg } style={ styles.btn_icon } />} Filters to arrange them as needed.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  start_container: {
    flex: 1,
    width: '100%',
    padding: 20
  },
  start_text: {
    fontSize: 18,
    lineHeight: 26,
    color: '#dfe7e8'
  },
  btn_icon: {
    height: 16,
    width: 16,
    verticalAlign: 'middle'
  },
});

export default Start