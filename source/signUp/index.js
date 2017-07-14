import nightmare from "nightmare"
import {test} from "tap"
import {pipe} from "ramda"

const WWW_LOCATION = "http://www.lacqueristas.local"
const travel = (actions) => pipe(actions)()
const getReady = () => {
  return nightmare({
    show: true,
    alwaysOnTop: false,
    dock: true,
    width: 1280,
    height: 1024,
  })
}
const clearAllCookies = (client) => client.cookies.clearAll()
const goTo = (location) => (client) => client.goto(`${WWW_LOCATION}${location}`)
const goToTheLandingPage = goTo("/")
const joinUs = (client) => client
  .then()
const giveAEmail = (client) => client
  .then()
const submitSignUp = (client) => client
  .then()

test(({equal}) => {
  return travel(
    getReady,
    clearAllCookies,
    goToTheLandingPage,
    joinUs,
    giveAEmail,
    submitSignUp,
  )
})
