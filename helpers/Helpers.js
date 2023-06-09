//helpers are organized as methods within Helpers object
const Helpers = {
  matchesRegex(input) {
    let regex = /!rtd\s[0-9]+/i;
    return regex.test(input);
  }
}

module.exports = Helpers;