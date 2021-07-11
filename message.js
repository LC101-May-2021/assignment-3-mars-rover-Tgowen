class Message {
  constructor (name, commands){
    this.name = name;
    if (typeof(name) !== typeof('')) {
      throw Error ("Message name required.")
    }
    this.commands = commands;
  }
}

module.exports = Message;