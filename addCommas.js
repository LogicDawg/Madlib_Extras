function addCommas(int) {
    const formattedNumber = int.toLocaleString("en-US")
    return formattedNumber;
}

module.exports = addCommas;