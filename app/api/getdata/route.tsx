import axios from "axios"
import { NextResponse } from "next/server";
export  async function POST(request :Request) {
  const body=await request.json()
  const query = body.query
  if(query.length <3){
    return new Response(JSON.stringify([]))
  }
  // const myHeaders = new Headers();
     
  // myHeaders.append("accept", "application/json");
  // myHeaders.append("toke", "");
  // myHeaders.append("Authorization", `Bearer ${process.env.mapmyindiatoken}`);
  // const requestOptions = {
  //   method: "GET",
  //   headers: myHeaders,

  //   redirect: "follow"
  // };

  // const data=await fetch("https://atlas.mappls.com/api/places/search/json?query="+query+"&location=30.352219159038565, 76.37400147986774&region=IND", requestOptions)
  // const data2= await data.json()
  // console.log(data)
  var data2 ={
    "suggestedLocations": [
        {
            "type": "POI",
            "placeAddress": "Bachitra Nagar, Patiala, Punjab, 147001",
            "eLoc": "1YDERN",
            "placeName": "Starbucks, Bhupindra Road",
            "alternateName": "",
            "keywords": [
                "FODCOF"
            ],
            "orderIndex": 1,
            "suggester": "placeName",
            "distance": 1067
        },
        {
            "type": "POI",
            "placeAddress": "Opposite Columbia Asia Hospital, Bhupindra Road, Civil Lines, Patiala, Punjab, 147001",
            "eLoc": "OYXCZB",
            "placeName": "STARiHOTELS",
            "alternateName": "",
            "keywords": [
                "HOTALL"
            ],
            "orderIndex": 2,
            "suggester": "placeName",
            "distance": 695
        },
        {
            "type": "POI",
            "placeAddress": "Panth Rattan Jathedar Gurcharan Singh Tohra Marg, Preet Nagar, Patiala, Punjab, 147004",
            "eLoc": "F4MFLZ",
            "placeName": "Five Star Auto Dealer",
            "alternateName": "",
            "keywords": [
                "STRSLS"
            ],
            "orderIndex": 3,
            "suggester": "placeName",
            "distance": 2029
        },
        {
            "type": "POI",
            "placeAddress": "Bhadson Road, Prem Nagar, Patiala, Punjab, 147004",
            "eLoc": "PI50LT",
            "placeName": "Star Salon",
            "alternateName": "",
            "keywords": [
                "RTSSLN"
            ],
            "orderIndex": 4,
            "suggester": "placeName",
            "distance": 926
        },
        {
            "type": "POI",
            "placeAddress": "Dukhniwaran, Patiala, Punjab, 147004",
            "eLoc": "HQJA50",
            "placeName": "Star Motors",
            "alternateName": "",
            "keywords": [
                "RTSHRD"
            ],
            "orderIndex": 5,
            "suggester": "placeName",
            "distance": 2198
        },
        {
            "type": "POI",
            "placeAddress": "Gill Enclave, Patiala, Punjab, 147001",
            "eLoc": "SNW3UG",
            "placeName": "Star Travels",
            "alternateName": "",
            "keywords": [
                "TRNCAR"
            ],
            "orderIndex": 6,
            "suggester": "placeName",
            "distance": 1336
        },
        {
            "type": "POI",
            "placeAddress": "Jagdish Marg, Rambagh Colony, Patiala, Punjab, 147001",
            "eLoc": "BWZ1RG",
            "placeName": "Star Path Lab",
            "alternateName": "",
            "keywords": [
                "LABPTH"
            ],
            "orderIndex": 7,
            "suggester": "placeName",
            "distance": 2503
        },
        {
            "type": "POI",
            "placeAddress": "Block A, Model Town, Patiala, Punjab, 147001",
            "eLoc": "SRBE7Z",
            "placeName": "Star Light Ielts",
            "alternateName": "",
            "keywords": [
                "EOTTRN"
            ],
            "orderIndex": 8,
            "suggester": "placeName",
            "distance": 1042
        },
        {
            "type": "POI",
            "placeAddress": "Bhadson Road, Near State Bank Of Bank, Manjit Nagar, Urban State Phase 2, Patiala, Punjab, 147004",
            "eLoc": "F5EO98",
            "placeName": "Star Land Property",
            "alternateName": "",
            "keywords": [
                "AGNPRP"
            ],
            "orderIndex": 9,
            "suggester": "placeName",
            "distance": 1248
        },
        {
            "type": "POI",
            "placeAddress": "Plot No D57, Focal Point, Patiala, Punjab, 147003",
            "eLoc": "0G65Q6",
            "placeName": "Star Auto Industries",
            "alternateName": "",
            "keywords": [
                "SHPIND"
            ],
            "orderIndex": 10,
            "suggester": "placeName",
            "distance": 4623
        },
        {
            "type": "POI",
            "placeAddress": "Bhadson Road, Prem Nagar, Patiala, Punjab, 147004",
            "eLoc": "SD1NFB",
            "placeName": "7 Starstylish Salon",
            "alternateName": "",
            "keywords": [
                "RTSSLN"
            ],
            "orderIndex": 11,
            "suggester": "placeName",
            "distance": 987
        },
        {
            "type": "POI",
            "placeAddress": "Near Laxmi Bai Dental College, Sirhind Road, Azad Nagar, Patiala, Patiala District, Punjab, 147004",
            "eLoc": "TGK1UT",
            "placeName": "Star Cafe",
            "alternateName": "",
            "keywords": [
                "RTSOTH"
            ],
            "orderIndex": 12,
            "suggester": "placeName",
            "distance": 7417
        }
    ],
    "userAddedLocations": [
        {
            "eLoc": "6EYTUQ",
            "orderIndex": 13,
            "placeAddress": "Coevolve Northern Star, Northern Star, Chokkanahalli, Bengaluru, Karnataka, Pin-560077",
            "placeName": "Coevolve",
            "type": ""
        },
        {
            "eLoc": "F0KA2L",
            "orderIndex": 14,
            "placeAddress": "H2 star galaxy opp patel park,chapprab ata road,",
            "placeName": "Star galaxy",
            "type": ""
        },
        {
            "eLoc": "XVLRFV",
            "orderIndex": 15,
            "placeAddress": "Arihant Star, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra",
            "placeName": "Arihant Star",
            "type": ""
        }
    ],
    "suggestedSearches": [],
    "rowLocations": []
}
  return new Response(JSON.stringify(data2))
}