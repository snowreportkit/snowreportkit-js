const Attribute = require( './attribute' )

class Readings extends Attribute {
  constructor( collection ) {
    super().addCollection( 'reading', collection )
  }
}

module.exports = Readings
