const Attribute = require( './attribute' )

class Windchill extends Attribute {
  constructor( attributes ) {
    super().addAttributes( attributes )
  }
}

module.exports = Windchill
