import { useEffect, useState } from 'react'
import { StyleSheet, Text } from 'react-native';
import { startViewerTrack, setViewerTime } from '../utils/functions';

const TimeViewer = ({ log, hasEntryToday }) => {

  const [ track, setTrack ] = useState()

  useEffect(() => {
    clearInterval(trackInt)
    let trackInt = hasEntryToday
                    ? setInterval(() => startViewerTrack(setTrack, log), 1000)
                    : setInterval(() => setViewerTime(setTrack), 1000)

    return () => clearInterval(trackInt)
  }, [ log ])

  return (
    <Text style={ styles.timeViewer }>
      { track }
    </Text>
  )
}

const styles = StyleSheet.create({
  timeViewer: {
    fontWeight: '400',
    letterSpacing: .6,
    fontSize: 14,
    color: "#dfe7e8"
  }
})

export default TimeViewer