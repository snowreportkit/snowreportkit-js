const Attribute = require( './attribute' )

class Precipitations extends Attribute {
  constructor( collection ) {
    super().addCollection( 'precipitation', collection )
  }
}

module.exports = Precipitations
