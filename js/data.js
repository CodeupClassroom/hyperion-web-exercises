// create an object that can be used by exporting to another file
const data = {
    theAnswer: 42,
    whichSideOfTheForce: 'The Dark Side',
    scarn: 'Cri-Man-Squa, FnC, Double Time!'
}

const instructor = {
    name: 'Casey',
    favColor: 'Orange',
    hackingExploits: 23
}

// say we wanted to save our keys.js data in an object here
const config = {
    mapboxApiKey: 'ASLKJ23KLJ634K3J4563L5KJ34K53KL',
    mapboxSecret: 'SADFASD7F8S7DF98SA787S98DF7',
}

// declare the data to be exported from this file - to our MAIN javascript file
//module.exports = {data, instructor, config}; // npm syntax
export default {data, instructor, config};