const Attribute = require( './attribute' )

class Trails extends Attribute {
  constructor( collection ) {
    super().addCollection( 'trail', collection )
  }
}

module.exports = Trails
