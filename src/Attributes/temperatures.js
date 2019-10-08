const Attribute = require( './attribute' )

class Temperatures extends Attribute {
  constructor( collection ) {
    super().addCollection( 'temperature', collection )
  }
}

module.exports = Temperatures
