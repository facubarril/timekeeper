import { StyleSheet, View } from 'react-native';
import Main from './src/main';

export default function App() {
  return (
    <View style={ styles.container }>
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#313743',
    alignItems: 'center'
  }
});
