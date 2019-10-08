const Attribute = require( './attribute' )

class Parks extends Attribute {
  constructor( collection ) {
    super().addCollection( 'park', collection )
  }
}

module.exports = Parks
