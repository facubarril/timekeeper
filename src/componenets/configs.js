import { StyleSheet, ScrollView, View } from 'react-native';

import Filters from './configs/filters';
import Range from './configs/range';
import Midnight from './configs/midnight';
import Backup from './configs/backup';
import ClearData from './configs/clear';

const Configs = ({ filterMode, setFilterMode, midnight, setMidnight, setLog, listRange, setListRange  }) => {
  return (
    <ScrollView style={ styles.configs_container }>
      <View style={ styles.configs_module }>
        <Midnight midnight={ midnight } setMidnight={ setMidnight } />
      </View>
      <View style={ styles.configs_module }>
        <Range listRange={ listRange } setListRange={ setListRange } />
      </View>
      <View style={ styles.configs_module }>
        <Filters filterMode={ filterMode } setFilterMode={ setFilterMode } />
      </View>
      <View style={ styles.configs_module }>
        <Backup />
      </View>
      <View style={ styles.configs_module }>
        <ClearData setLog={ setLog } />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  configs_container: {
    flex: 1,
    width: '100%',
    padding: 20
  },
  configs_module: {
    marginBottom: 40
  }
});

export default Configs