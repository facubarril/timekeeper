import { FlatList, Text, View } from 'react-native';

const ListGrouped = ({ log, styles }) => {

  const parseLog = log => {
    const [date, hours, mins, ...titleArr] = log.split(/[\s:]+/);
    const title = titleArr.join(' ');
    const dateTime = new Date(`${date}T${hours}:${mins}`);
    return { dateTime, title };
  };

  const formatDuration = minutes => {
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
};

  const filteredLogs = log.map(parseLog).reduce((acc, log, index, array) => {
    if (log.title === "Start") return acc;

    if (!acc[log.title]) {
        acc[log.title] = { title: log.title, totalDuration: 0, count: 0 };
    }

    const previousLog = array[index - 1];
    if (previousLog) {
        const timeDiff = (log.dateTime - previousLog.dateTime) / 60000;
        acc[log.title].totalDuration += timeDiff;
    }

    acc[log.title].count++;
    return acc;
  }, {});

  const groupedLogs = Object.values(filteredLogs).map(group => ({
    title: group.title,
    totalDuration: formatDuration(group.totalDuration),
    occurrences: group.count
  }));

  return (
    <FlatList
      style={ styles.list_container }
      data={ groupedLogs }
      renderItem={({item}) =>
        <View style={ styles.list_item_container }>
          <Text style={[ styles.list_item_text, styles.list_item_flex ]}>
            { item.title }
          </Text>
          <Text style={ styles.list_item_text }>
            { item.totalDuration }
          </Text>
        </View>
      }
      keyExtractor={(item, index) => index.toString()}
    />
  )
}

export default ListGrouped