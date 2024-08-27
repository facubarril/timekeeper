import { StyleSheet } from 'react-native';

import ListDefault from './list/default';
import ListGrouped from './list/grouped';

import ListSummary from './list/summary';

const List = ({ log, filterMode }) => {

  switch (true) {
    case filterMode === 1:
      return <ListGrouped log={ log } styles={ styles }/>
    case filterMode === 2:
      return <ListSummary log={ log } styles={ styles }/>
    default:
      return <ListDefault log={ log } styles={ styles }/>
  }
}

const styles = StyleSheet.create({
  list_container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 10
  },
  list_item_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 10
  },
  list_item_text: {
    fontSize: 16,
    lineHeight: 26,
    color: '#dfe7e8'
  },
  list_item_flex: {
    flex: 1
  }
});

export default List