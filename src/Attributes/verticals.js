const Attribute = require( './attribute' )

class Verticals extends Attribute {
  constructor( collection ) {
    super().addCollection( 'vertical', collection )
  }
}

module.exports = Verticals
