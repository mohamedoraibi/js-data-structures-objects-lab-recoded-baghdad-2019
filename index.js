// Write your solution in this file!
const driver = { name: '11 Broadway' };

function updateDriverWithKeyAndValue(driver, key, value){
  const newObj = Object.assign({}, driver);
  newObj.address= newObj.name;
  newObj.name='Sam';
  return newObj;
}



