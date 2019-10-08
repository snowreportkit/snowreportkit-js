class Attribute {

  constructor() {
    return this
  }


  addAttributes( attributes ) {
    const CLASSES = require( './classes' )

    for ( let k in attributes ) {
      if ( attributes.hasOwnProperty( k ) ) {
        if ( attributes[ k ] !== null && CLASSES.hasOwnProperty( k ) ) {
          attributes[ k ] = new CLASSES[ k ]( attributes[ k ] )
        }

        this[ k ] = attributes[ k ]
      }
    }
  }

  addCollection( singular, collection ) {
    const CLASSES = require( './classes' )

    for ( let k in collection ) {
      if ( collection.hasOwnProperty( k ) ) {
        if ( collection[ k ] !== null ) {
          this[ k ] = new CLASSES[ singular ](
            Object.assign( { name: k }, collection[ k ] )
          )
        }
      }
    }
  }

}

module.exports = Attribute
