const Attribute = require( './attribute' )

class Weather extends Attribute {
  constructor( attributes ) {
    super().addAttributes( attributes )
  }
}

module.exports = Weather
