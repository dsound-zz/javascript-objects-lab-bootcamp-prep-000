var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var addRecipe = object[key] = [value]
  return addRecipe
}