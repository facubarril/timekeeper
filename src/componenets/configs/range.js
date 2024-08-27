import { Image } from 'expo-image';
import { StyleSheet, View, Text, Switch } from 'react-native';

import CalendarIcon from '../../../assets/icons/calendar.svg'

const Range = ({ listRange, setListRange }) => {

  const toggleSwitch = n => setListRange(n)

  return (
    <>
      <View style={ styles.configs_title }>
        <Text style={ styles.configs_title }><Image source={ CalendarIcon } style={ styles.icon } /> List range</Text>
      </View>
      <View style={ styles.toggle_item }>
        <Text style={ styles.configs_text }>Today</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#50b2c0' }}
          ios_backgroundColor="#50b2c0"
          onValueChange={ () => toggleSwitch('day') }
          value={ listRange === 'day' }
        />
      </View>
      <View style={ styles.toggle_item }>
        <Text style={ styles.configs_text }>Last 7 days</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#50b2c0' }}
          ios_backgroundColor="#50b2c0"
          onValueChange={ () => toggleSwitch('week') }
          value={ listRange === 'week' }
        />
      </View>
      <View style={ styles.toggle_item }>
        <Text style={ styles.configs_text }>Last 30 days</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#50b2c0' }}
          ios_backgroundColor="#50b2c0"
          onValueChange={ () => toggleSwitch('month') }
          value={ listRange === 'month' }
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

export default Range