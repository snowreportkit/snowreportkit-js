const Attribute = require( './attribute' )

class Report extends Attribute {
  constructor( attributes ) {
    super().addAttributes( attributes )
  }
}

module.exports = Report
