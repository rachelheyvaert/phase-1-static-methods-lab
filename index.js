class Formatter {
  static capitalize(string){
return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(str) {
    return str.replaceAll(/[^A-z0-9' -]|\^/g, '')
  }
  static titleize(string){
    const words = string.split(" ");
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const result = []
    for (let i = 0; i < words.length; i++) {
      if(i == 0) {
       result.push(this.capitalize(words[i]))
           } else {if(exceptions.includes(words[i])) {
             result.push(words[i])
           } else {
            result.push(this.capitalize(words[i]))
           } 
           }
      } return result.join(' ')

  }
}
