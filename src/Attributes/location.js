const Attribute = require( './attribute' )

class Location extends Attribute {
  constructor( attributes ) {
    super().addAttributes( attributes )
  }
}

module.exports = Location
