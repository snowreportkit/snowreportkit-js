const Attribute = require( './attribute' )

class Message extends Attribute {
  constructor( attributes ) {
    super().addAttributes( attributes )
  }
}

module.exports = Message
