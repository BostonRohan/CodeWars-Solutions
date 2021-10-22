//Creating an object, with every light change.
const updateLight = current => ({
green : 'yellow',
yellow: 'red',
red: 'green',
})[current];
//Accessing the value of the object using it's key.
updateLight('green')