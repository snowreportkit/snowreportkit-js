const Attribute = require( './attribute' )

class Feature extends Attribute {
  constructor( attributes ) {
    super().addAttributes( attributes )
  }
}

module.exports = Feature
