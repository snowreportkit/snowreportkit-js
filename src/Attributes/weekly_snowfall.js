const Attribute = require( './attribute' )

class WeeklySnowfall extends Attribute {
  constructor( attributes ) {
    super().addAttributes( attributes )
  }
}

module.exports = WeeklySnowfall
