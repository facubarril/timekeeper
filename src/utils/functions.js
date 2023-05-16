const getFormatedDate = () => {
  const now = new Date(),
        year = now.getFullYear(),
        month = (now.getMonth()+1).toString().padStart(2, '0'),
        day = now.getDate().toString().padStart(2, '0'),
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

const setViewerTime = (setTrack) => {
  let now = new Date(),
      mins = now.getMinutes(),
      hrs = now.getHours()

  let fMins = mins.toString().padStart(2, '0'),
      fHrs = hrs.toString().padStart(2, '0')

  setTrack(`${fHrs}:${fMins}`)
}

const startViewerTrack = (setTrack, log) => {
const lastItem = log.slice(-1)[0].split(': ')[0]
const trackItem = new Date(lastItem),
      now = new Date()

let diff = now - trackItem,
    segs = Math.floor(diff / 1000),
    mins = Math.floor(segs / 60),
    hrs = Math.floor(mins / 60);

let fMins = (mins % 60).toString().padStart(2, '0'),
    fHrs = hrs.toString().padStart(2, '0')

setTrack(`${fHrs}:${fMins}`)
}

export { startTracking, logTime, setViewerTime, startViewerTrack }