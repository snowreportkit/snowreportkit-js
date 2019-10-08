const Attribute = require( './attribute' )

class Station extends Attribute {
  constructor( attributes ) {
    super().addAttributes( attributes )
  }
}

module.exports = Station
