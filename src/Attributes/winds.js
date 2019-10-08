const Attribute = require( './attribute' )

class Winds extends Attribute {
  constructor( collection ) {
    super().addCollection( 'wind', collection )
  }
}

module.exports = Winds
