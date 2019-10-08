const Attribute = require( './attribute' )

class Features extends Attribute {
  constructor( collection ) {
    super().addCollection( 'feature', collection )
  }
}

module.exports = Features
