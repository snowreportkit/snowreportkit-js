const Attribute = require( './attribute' )

class Cameras extends Attribute {
  constructor( collection ) {
    super().addCollection( 'camera', collection )
  }
}

module.exports = Cameras
