import nightmare from "nightmare"
import {test} from "tap"

const WWW_LOCATION = "http://www.lacqueristas.local"
const configuration = {
  show: true,
  alwaysOnTop: false,
  dock: true,
  width: 1280,
  height: 1024,
}
const open = (path) => {
  return nightmare(configuration)
    .cookies.clearAll()
    .goto(`${WWW_LOCATION}${path}`)
}

test(({equal}) => {
  return open("/")
    .then()
})
