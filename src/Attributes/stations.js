const Attribute = require( './attribute' )

class Stations extends Attribute {
  constructor( collection ) {
    super().addCollection( 'station', collection )
  }
}

module.exports = Stations
