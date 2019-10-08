const Attribute = require( './attribute' )

class Roads extends Attribute {
  constructor( collection ) {
    super().addCollection( 'road', collection )
  }
}

module.exports = Roads
