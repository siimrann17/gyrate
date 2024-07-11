import axios from "axios"
import { NextResponse } from "next/server";

function decode( value ) {

    var values = decode.integers( value )
    var points = []
  
    for( var i = 0; i < values.length; i += 2 ) {
      points.push([
        ( values[ i + 0 ] += ( values[ i - 2 ] || 0 ) ) / 1e5,
        ( values[ i + 1 ] += ( values[ i - 1 ] || 0 ) ) / 1e5,
      ])
    }
  
    return points
  
  }
  
  decode.sign = function( value ) {
    return value & 1 ? ~( value >>> 1 ) : ( value >>> 1 )
  }
  
  decode.integers = function( value ) {
  
    var values = []
    var byte = 0
    var current = 0
    var bits = 0
  
    for( var i = 0; i < value.length; i++ ) {
  
      byte = value.charCodeAt( i ) - 63
      current = current | (( byte & 0x1F ) << bits )
      bits = bits + 5
  
      if( byte < 0x20 ) {
        values.push( decode.sign( current ) )
        current = 0
        bits = 0
      }
  
    }
  
    return values
  
  }

export  async function POST(request :Request) {
    const body=await request.json()
  var query = body.query
query = encodeURIComponent(query);
const response = await axios.get(
      `https://apis.mappls.com/advancedmaps/v1/${process.env.mapmyindiatoken}/route_adv/biking/` +
        query,
      {
        params: {
          geometries: "polyline",
          steps: "false",
          exclude: "ferry",

          alternatives: "2",

          overview: "simplified",
        },
        headers: {
          accept: "application/json",
        },
      }
    );
    console.log(response.data)
    var geo = response.data.routes[0].geometry;
    var distance = response.data.routes[0].distance
    var points={points:decode(geo),
      distance:distance}
    
    console.log(points)
    
  return new Response(JSON.stringify(points))
}