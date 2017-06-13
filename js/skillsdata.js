
var masterninjadata = JSON.parse(JSON.stringify(masterninja));

function convertExample(json, temp) {
  for (var key in json) {
    if (typeof json[key] === 'object') {
      for (var j = 0; j < json[key].length; j++) {
        var curProp = json[key][j];
        if (curProp.subcategories !== undefined) {
          temp.Skills[curProp.name] = {};
          for (var i = 0; i < curProp.subcategories.length; i++) {
            temp.Skills[curProp.name][curProp.subcategories[i].name] = {}
            convertExample(curProp.subcategories[i], temp.Skills[curProp.name][curProp.subcategories[i].name]);
          }
        } else if (curProp.array !== undefined) {
          temp[curProp.name] = curProp.array;
        }

      }
    }
  }
}


var skillsdata = { "Skills": {} }

convertExample(masterninjadata, skillsdata);
