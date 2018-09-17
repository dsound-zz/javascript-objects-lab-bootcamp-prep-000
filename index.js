var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
 
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
  var newRecipeUpdate = object[key] = value
  return newRecipeUpdate
}