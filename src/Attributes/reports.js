const Attribute = require( './attribute' )

class Reports extends Attribute {
  constructor( collection ) {
    super().addCollection( 'report', collection )
  }
}

module.exports = Reports
