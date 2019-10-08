const Attribute = require( './attribute' )

class Reading extends Attribute {
  constructor( attributes ) {
    super().addAttributes( attributes )
  }
}

module.exports = Reading
