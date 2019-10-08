const Attribute = require( './attribute' )

class Park extends Attribute {
  constructor( attributes ) {
    super().addAttributes( attributes )
  }
}

module.exports = Park
