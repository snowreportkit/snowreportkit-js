const Attribute = require( './attribute' )

class Forecast extends Attribute {
  constructor( attributes ) {
    super().addAttributes( attributes )
  }
}

module.exports = Forecast
