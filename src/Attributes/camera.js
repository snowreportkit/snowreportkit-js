const moment    = require( 'moment' )
const Attribute = require( './attribute' )

class Camera extends Attribute {
  constructor( attributes ) {
    super().addAttributes( attributes )
    this.updated_at = moment( attributes.updated_at ).toDate() || null
  }
}

module.exports = Camera
