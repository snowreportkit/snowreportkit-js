const Attribute = require( './attribute' )

class Lift extends Attribute {
  constructor( attributes ) {
    super().addAttributes( attributes )
  }
}

module.exports = Lift
