const Attribute = require( './attribute' )

class WeeklySnowfalls extends Attribute {
  constructor( collection ) {
    super().addCollection( 'weekly_snowfall', collection )
  }
}

module.exports = WeeklySnowfalls
