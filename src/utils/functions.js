/*
** File url to storage all logs
** used here
**/
import * as FileSystem from 'expo-file-system';
const fileUrl = `${FileSystem.documentDirectory}log_${new Date().getFullYear()}.txt`;

/*
** Formats dates for gtimelog logs compatibility
** used with functions here
**/
const getFormatedDate = () => {
  const now = new Date(),
        year = now.getFullYear(),
        month = (now.getMonth()+1).toString().padStart(2, '0'),
        day = now.getDate().toString().padStart(2, '0'),
        hrs = now.getHours().toString().padStart(2, '0'),
        mins = now.getMinutes().toString().padStart(2, '0');

  return `${year}-${month}-${day} ${hrs}:${mins}`
  /* gtimelog compatible format */
}

/*
** Saves the entire log to storage
** used in src/main
**/
const saveLogToFile = async (logEntry) => {
  try {
    const fileContent = await FileSystem.readAsStringAsync(fileUrl, { encoding: FileSystem.EncodingType.UTF8 }).catch(() => '');
    const updatedContent = fileContent + logEntry + '\n';
    await FileSystem.writeAsStringAsync(fileUrl, updatedContent);
    console.log('Log guardado en el archivo!');
  } catch (error) {
    console.error('Error guardando el log en el archivo:', error);
  }
};

/*
** Logs the current time track and starts a new one
** used in src/components/controls
**/
const logTime = (input, setInput, log, setLog, setNewEntry) => {
  const time = getFormatedDate(),
        name = input !== ''
                ? input
                : null

  if (!name) return alert('Task title is empty, enter a description.');

  const logEntry = `${time}: ${name}`;

  setInput('');
  setNewEntry(logEntry)
  setLog((log) => [...log, logEntry]);
}

/*
** Starts the first track of the day
** used in src/components/controls
**/
const startTracking = (log, setLog, setNewEntry) => {
  const time = getFormatedDate();
  const name = 'Start';

  const logEntry = `${'\n'}${time}: ${name}`;

  setNewEntry(logEntry)
  setLog((log) => [...log, logEntry]);
};

/*
** Returns the difference between two times
** used in src/components/list/default
*/
const getTimeDif = (itemStartTime, itemEndTime) => {
  let diff = itemEndTime - itemStartTime,
      segs = Math.floor(diff / 1000),
      mins = Math.floor(segs / 60),
      hrs = Math.floor(mins / 60);

  let fMins = (mins % 60).toString().padStart(2, '0'),
      fHrs = hrs.toString().padStart(2, '0')

  return `${fHrs}:${fMins}`
}

/*
** Handles the time at the topbar (not tracking)
** used in src/components/timeViewer
**/
const setViewerTime = (setTrack) => {
  let now = new Date(),
      mins = now.getMinutes(),
      hrs = now.getHours()

  let fMins = mins.toString().padStart(2, '0'),
      fHrs = hrs.toString().padStart(2, '0')

  setTrack(`${fHrs}:${fMins}`)
}

/*
** Handles the time track at the topbar
** used in src/components/timeViewer
**/
const startViewerTrack = (setTrack, log) => {
  const lastItem = log.slice(-1)[0].split(': ')[0]
  const trackItem = new Date(lastItem),
        now = new Date()

  setTrack(getTimeDif(trackItem, now))
}

/*
** Obtains and filters logs from file with configurations
** used in src/main
**/
const readAndFilterLogs = async ( midnight, listRange ) => {
  const now = new Date();
  const startOfDay = new Date();
  startOfDay.setHours(parseInt(midnight.split(':')[0]), parseInt(midnight.split(':')[1]), 0, 0);

  try {
    const fileContent = await FileSystem.readAsStringAsync(fileUrl, { encoding: FileSystem.EncodingType.UTF8 }).catch(() => '');
    const logs = fileContent.split('\n').filter(line => line.length > 0);

    const filteredData = logs.filter(log => {
      const logDate = new Date(log.split(': ')[0]);

      switch (listRange) {
        case 'day':
          return logDate >= startOfDay && logDate <= now;
        case 'week':
          const startOfWeek = new Date(now);
          startOfWeek.setDate(now.getDate() - 7);
          return logDate >= startOfWeek && logDate <= now;
        case 'month':
          const startOfMonth = new Date(now);
          startOfMonth.setMonth(now.getMonth() - 1);
          return logDate >= startOfMonth && logDate <= now;
        default:
          return false;
      }
    });

    const hasLogToday = logs.some(log => {
      const logDate = new Date(log.split(': ')[0]);
      return logDate >= startOfDay && logDate <= now;
    });

    return { rawData: logs, filteredData, hasLogToday };

  } catch (error) {
    console.error('Error reading log file:', error);
    return { rawData: logs, filteredData: [], hasLogToday: false };
  }
}

/*
** Save used configurations
** used in src/main
**/
import AsyncStorage from '@react-native-async-storage/async-storage';
const saveSettings = async (midnight, listRange, filterMode) => {
  try {
    await AsyncStorage.setItem('midnight', midnight);
    await AsyncStorage.setItem('listRange', listRange);
    await AsyncStorage.setItem('filterMode', filterMode.toString());
  } catch (error) {
    console.error('Error saving settings:', error);
  }
};

/*
** Load user configurations
** used in src/main
**/
const loadSettings = async (setMidnight, setListRange, setFilterMode) => {
  try {
    const savedMidnight = await AsyncStorage.getItem('midnight');
    const savedListRange = await AsyncStorage.getItem('listRange');
    const savedFilterMode = await AsyncStorage.getItem('filterMode');

    if (savedMidnight !== null) setMidnight(savedMidnight);
    if (savedListRange !== null) setListRange(savedListRange);
    if (savedFilterMode !== null) setFilterMode(parseInt(savedFilterMode, 10));
  } catch (error) {
    console.error('Error loading settings:', error);
  }
};

export { fileUrl, startTracking, saveLogToFile, logTime, setViewerTime, startViewerTrack, getTimeDif, getFormatedDate, readAndFilterLogs, saveSettings, loadSettings }