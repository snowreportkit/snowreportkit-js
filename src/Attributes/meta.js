const Attribute = require( './attribute' )

class Meta extends Attribute {
  constructor( attributes ) {
    super().addAttributes( attributes )
  }
}

module.exports = Meta
