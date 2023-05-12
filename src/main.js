import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './componenets/header';
import Controls from './componenets/controls';
import List from './componenets/list';

const Main = () => {

  const reset = { startTime: null, input: '' }
  const [ timer, setTimer ] = useState(reset)
  const [ log, setLog ] = useState([])

  return (
    <View style={ styles.container }>
      <Header timer={ timer } setTimer={ setTimer } />
      {
        log.length ? <List log={ log } /> : null
      }
      <Controls timer={ timer } setTimer={ setTimer } log={ log } setLog={ setLog } />
      {<StatusBar style="auto" />}
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