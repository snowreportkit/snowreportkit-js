const Attribute = require( './attribute' )

class Temperature extends Attribute {
  constructor( attributes ) {
    super().addAttributes( attributes )
  }
}

module.exports = Temperature
