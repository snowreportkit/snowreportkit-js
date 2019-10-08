const Attribute = require( './attribute' )

class Road extends Attribute {
  constructor( attributes ) {
    super().addAttributes( attributes )
  }
}

module.exports = Road
