function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase())
}
function logWhisper(string) {
  console.log(string.toLowerCase())
}
function SayHiToGrandma(string) {
  if (string.toUpperCase() === string) {
    return "YES INDEED!"
  }
  else if (string === "I love you, Grandma.") {
    return ("I love you, too.")
  }
  else {
    return("I cant hear you")
  }
  
