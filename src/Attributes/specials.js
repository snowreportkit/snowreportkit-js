const Attribute = require( './attribute' )

class Specials extends Attribute {
  constructor( collection ) {
    super().addCollection( 'special', collection )
  }
}

module.exports = Specials
