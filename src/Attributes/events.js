const Attribute = require( './attribute' )

class Events extends Attribute {
  constructor( collection ) {
    super().addCollection( 'event', collection )
  }
}

module.exports = Events
