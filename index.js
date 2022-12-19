function scuberGreetingForFeet(ex) {
  if (ex < 200){
    return 'This one is on me!'
  } else if (ex >= 200 && ex <= 2000){
    return 'That will be twenty bucks.'
  } else if (ex >=2001 && ex <=2500){
    return 'I will gladly take your thirty bucks.'
  } else if (ex >=2501){
    return 'No can do.'
  }
}

function ternaryCheckCity(city) {
  if (city === 'NYC') {
    return 'Ok, sounds good.'
  } else {
    return 'No go.'
  }
}

function switchOnCharmFromTip(tip) {
  if (tip === 'generous') {
    return 'Thank you so much.'
  } else if (tip === 'not as generous') {
    return  'Thank you.'
  } else {
    return 'Bye.'
  }
}