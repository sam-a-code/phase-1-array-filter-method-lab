// Code your solution here

function findMatching(drivers, string){
    return drivers.filter(drivers => {return drivers.toLowerCase() === string.toLowerCase()
})
}

function fuzzyMatch(drivers, name){
    return drivers.filter(
        function (driver) {
            return driver.toLowerCase().substring(0, name.length) === name.toLowerCase()})
}

function matchName(driver, nameProperty){
    return driver.filter(name => name.name === nameProperty)
}