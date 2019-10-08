const Attribute = require( './attribute' )

class Special extends Attribute {
  constructor( attributes ) {
    super().addAttributes( attributes )
  }
}

module.exports = Special
