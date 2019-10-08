const Attribute = require( './attribute' )

class Lifts extends Attribute {
  constructor( collection ) {
    super().addCollection( 'lift', collection )
  }
}

module.exports = Lifts
