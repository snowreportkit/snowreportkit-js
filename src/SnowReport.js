const axios = require( 'axios' )

class SnowReport {

  constructor( config ) {
    this.snow_report     = null
    this.refresh_timer   = null
    this.loaded_callback = null

    const default_config = {
      refresh_interval: 60
    }

    config = typeof config === 'string' ? {
      uri: config
    } : config

    this.config = Object.assign( default_config, config )

    if ( !this.config.uri ) {
      throw new Error( 'The snow report\'s URI cannot be null.' )
    }

    this.fetch()

    return new Proxy( this, this )
  }

  get( target, prop ) {
    if ( this[ prop ] ) {
      return this[ prop ]
    }

    if ( this.snow_report ) {
      return this.snow_report[ prop ]
    }

    return null
  }

  ready() {
    return this.snow_report
  }

  onLoaded( callback ) {
    this.loaded_callback = callback
  }

  fetch() {
    return new Promise( ( resolve, reject ) => {
      axios.get( this.config.uri )
        .then( r => {
          this.snow_report = this.parse( r.data )
          this.startRefreshInterval()
          if ( this.loaded_callback ) {
            this.loaded_callback()
          }
          return resolve( this.snow_report )
        } )
        .catch( e => {
          // console.log( e )
          this.snow_report = e.response
          return reject( e.response )
          throw new Error( 'There was a problem loading the snow report at ' + this.config.uri + '.\n' )
        } )
    } )
  }

  startRefreshInterval() {
    if ( this.refresh_timer ) {
      return
    }

    this.refresh_timer = setInterval( () => this.fetch(), this.config.refresh_interval * 1000 )
  }

  parse( snow_report ) {
    const CLASSES = require( './Attributes/classes' )

    for ( let k in snow_report ) {
      if ( snow_report.hasOwnProperty( k ) ) {
        if ( CLASSES.hasOwnProperty( k ) ) {
          snow_report[ k ] = new CLASSES[ k ]( snow_report[ k ] )
        }
      }
    }

    return snow_report
  }

}

module.exports = SnowReport
