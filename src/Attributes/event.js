const Attribute = require( './attribute' )

class Event extends Attribute {
  constructor( attributes ) {
    super().addAttributes( attributes )
  }
}

module.exports = Event
