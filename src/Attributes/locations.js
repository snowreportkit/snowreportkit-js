const Attribute = require( './attribute' )

class Locations extends Attribute {
  constructor( collection ) {
    super().addCollection( 'location', collection )
  }
}

module.exports = Locations
