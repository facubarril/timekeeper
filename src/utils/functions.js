const getFormatedDate = () => {
  const now = new Date(),
        year = now.getFullYear(),
        month = (now.getMonth()+1).toString().padStart(2, '0'),
        day = now.getDay().toString().padStart(2, '0'),
        hrs = now.getHours().toString().padStart(2, '0'),
        mins = now.getMinutes().toString().padStart(2, '0');

  return `${year}-${month}-${day} ${hrs}:${mins}`
}

const logTime = (input, setInput, log, setLog) => {
  const time = getFormatedDate(), /* gtimelog compatible format */
        name = input === ''
                ? `Tk: Log ${ log.length }`
                : input;

  setInput('')
  setLog(log => [ ...log, `${time}: ${name}`])
}

const startTracking = (log, setLog) => {
  const time = getFormatedDate(), /* gtimelog compatible format */
        name = 'Start'

  setLog(log => [ ...log, `${time}: ${name}`])
}

export { startTracking, logTime }