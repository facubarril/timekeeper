import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import { saveLogToFile, readAndFilterLogs } from './utils/functions'

import Header from './componenets/header';
import Controls from './componenets/controls';
import List from './componenets/list';
import Start from './componenets/start';
import Configs from './componenets/configs';

const Main = () => {

  /* Views */
  const [ config, setConfig ] = useState(false)

  /* States */
  const [ input, setInput ] = useState('')
  const [ log, setLog ] = useState([])
  const [ newEntry, setNewEntry ] = useState('')
  const [ hasEntryToday, setHasEntryToday ] = useState(false)

  /* Configs */
  const [ midnight, setMidnight ] = useState('00:00')
  const [ listRange, setListRange ] = useState('day')
  const [ filterMode, setFilterMode ] = useState(1)

  const readLogsFromFile = async () => {
    const { filteredData, hasLogToday } = await readAndFilterLogs(midnight, listRange)
    setHasEntryToday(hasLogToday)
    setLog(filteredData)
  };

  useEffect(() => {  }, [])

  useEffect(() => {
    readLogsFromFile()
  }, [ listRange, midnight ])

  useEffect(() => {
    if (newEntry !== '') {
      saveLogToFile(newEntry)
      setNewEntry('')
    }
  }, [ newEntry ])

  return (
    <View style={ styles.container }>
      <StatusBar style="light" />
      <Header log={ log } hasEntryToday={ hasEntryToday } input={ input } setInput={ setInput } config={ config }/>
      {
        config
        ? <Configs
            filterMode={ filterMode }
            setFilterMode={ setFilterMode}
            midnight={ midnight }
            setMidnight={ setMidnight }
            setLog={ setLog }
            listRange={ listRange }
            setListRange={ setListRange }
          />
        : (
          log.length > 1
          ? <List log={ log } filterMode={ filterMode } />
          : <Start />
        )
      }
      <Controls
        input={ input }
        setInput={ setInput }
        log={ log }
        setLog={ setLog }
        hasEntryToday={ hasEntryToday }
        setNewEntry={ setNewEntry }
        config={ config }
        setConfig={ setConfig }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  }
});

export default Main