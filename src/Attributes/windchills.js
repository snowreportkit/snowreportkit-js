const Attribute = require( './attribute' )

class Windchills extends Attribute {
  constructor( collection ) {
    super().addCollection( 'windchill', collection )
  }
}

module.exports = Windchills
