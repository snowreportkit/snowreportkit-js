const Attribute = require( './attribute' )

class Messages extends Attribute {
  constructor( collection ) {
    super().addCollection( 'message', collection )
  }
}

module.exports = Messages
