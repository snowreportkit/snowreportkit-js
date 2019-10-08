const moment    = require( 'moment' )
const Attribute = require( './attribute' )

class Info extends Attribute {
  constructor( attributes ) {
    super().addAttributes( attributes )
    this.open  = moment( attributes.open ).toDate() || null
    this.close = moment( attributes.close ).toDate() || null
  }
}

module.exports = Info
