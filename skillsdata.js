var skillsdata = JSON.parse(JSON.stringify(masterninja));;


function bla(hi) {
  for (var key in hi) {
    if (hi.hasOwnProperty(key)) {
      if (typeof hi[key] === 'object') {
        if (hi[key].array !== undefined) {
          hi[key] = hi[key].array;
        } else {
          bla(hi[key]);
        }
      }
    }
  }
}

bla(skillsdata);