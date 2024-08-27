import { Image } from 'expo-image';
import { StyleSheet, View, Text, Switch } from 'react-native';

import FilterIcon from '../../../assets/icons/filter.svg'

const Filters = ({ filterMode, setFilterMode }) => {

  const toggleSwitch = n => setFilterMode(n)

  return (
    <>
      <View style={ styles.configs_title }>
        <Text style={ styles.configs_title }><Image source={ FilterIcon } style={ styles.icon } /> Filters</Text>
      </View>
      <View style={ styles.toggle_item }>
        <Text style={ styles.configs_text }>Chronological</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#50b2c0' }}
          ios_backgroundColor="#50b2c0"
          onValueChange={ () => toggleSwitch(0) }
          value={ filterMode == 0 }
        />
      </View>
      <View style={ styles.toggle_item }>
        <Text style={ styles.configs_text }>Grouped</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#50b2c0' }}
          ios_backgroundColor="#50b2c0"
          onValueChange={ () => toggleSwitch(1) }
          value={ filterMode == 1 }
        />
      </View>
      <View style={ styles.toggle_item }>
        <Text style={ styles.configs_text }>Summary</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#50b2c0' }}
          ios_backgroundColor="#50b2c0"
          onValueChange={ () => toggleSwitch(2) }
          value={ filterMode == 2 }
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  configs_title: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '700',
    color: '#dfe7e8'
  },
  toggle_item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  icon: {
    height: 14,
    width: 14
  },
  configs_text: {
    fontSize: 16,
    lineHeight: 23,
    color: '#dfe7e8'
  },
});

export default Filters