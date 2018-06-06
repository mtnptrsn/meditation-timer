import { toSeconds, humanizeUnit } from '../utils'
import { sounds } from '../data'

export default (request) => agent => {
  const {
    amount: duration,
    unit
  } = request.body.queryResult.parameters.duration

  const playMusic = request.body.queryResult.parameters.soundBool === 'with music'
  const durationInSeconds = toSeconds(duration, unit)

  const breakTag = playMusic
    ? `<audio src="${sounds.rain}" repeatDur="${durationInSeconds}s"></audio>`
    : `<break time="${durationInSeconds}s" />`

  const ssml = `
    <speak>
      Okay, meditation for ${duration} ${humanizeUnit(unit)}.
      <audio fadeInDur="1s" soundLevel="-6db" src="${sounds.bell}"></audio>
      ${breakTag}
      <audio fadeInDur="1s" soundLevel="-6db" src="${sounds.bell}"></audio>
    </speak>
  `

  agent.add(ssml)
}