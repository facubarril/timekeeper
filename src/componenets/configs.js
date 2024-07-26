import { StyleSheet, Text, ScrollView } from 'react-native';

const Configs = () => {
  return (
    <ScrollView style={ styles.configs_container }>
      <Text style={ styles.configs_text }>
        Configs
      </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  configs_container: {
    flex: 1,
    width: '100%',
    padding: 20
  },
  configs_text: {
    fontSize: 16,
    lineHeight: 23,
    color: '#dfe7e8'
  },
});

export default Configs