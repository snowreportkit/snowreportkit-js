const Attribute = require( './attribute' )

class Weathers extends Attribute {
  constructor( collection ) {
    super().addCollection( 'weather', collection )
  }
}

module.exports = Weathers
