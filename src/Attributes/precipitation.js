const Attribute = require( './attribute' )

class Precipitation extends Attribute {
  constructor( attributes ) {
    super().addAttributes( attributes )
  }
}

module.exports = Precipitation
