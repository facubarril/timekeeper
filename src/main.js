import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './componenets/header';
import Controls from './componenets/controls';
import List from './componenets/list';
import Start from './componenets/start';

const Main = () => {

  const [ input, setInput ] = useState('')
  const [ log, setLog ] = useState([])

  return (
    <View style={ styles.container }>
      <StatusBar style="light" />
      <Header log={ log } input={ input } setInput={ setInput } />
      {
        log.length > 1
        ? <List log={ log } />
        : <Start />
      }
      <Controls input={ input } setInput={ setInput } log={ log } setLog={ setLog } />
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