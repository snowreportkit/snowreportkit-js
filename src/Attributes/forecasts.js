const Attribute = require( './attribute' )

class Forecasts extends Attribute {
  constructor( collection ) {
    super().addCollection( 'forecast', collection )
  }
}

module.exports = Forecasts
