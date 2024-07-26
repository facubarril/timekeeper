import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './componenets/header';
import Controls from './componenets/controls';
import List from './componenets/list';
import Start from './componenets/start';
import Configs from './componenets/configs';

const Main = () => {

  const [ config, setConfig ] = useState(false)
  const [ input, setInput ] = useState('')
  const [ log, setLog ] = useState([])

  return (
    <View style={ styles.container }>
      <StatusBar style="light" />
      <Header log={ log } input={ input } setInput={ setInput } config={ config }/>
      {
        config
        ? <Configs />
        : (
          log.length > 1
          ? <List log={ log } />
          : <Start />
        )
      }
      <Controls input={ input } setInput={ setInput } log={ log } setLog={ setLog } config={ config } setConfig={ setConfig } />
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