const Attribute = require( './attribute' )

class Address extends Attribute {
  constructor( attributes ) {
    super().addAttributes( attributes )
    this.directions = attributes.directions || []
  }

  googleMaps() {
    // todo:
  }

  openStreetMap() {
    // todo:
  }
}

module.exports = Address
