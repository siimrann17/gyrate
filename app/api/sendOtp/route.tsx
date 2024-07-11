import axios from "axios"
import { NextResponse } from "next/server";
export  async function POST(request :Request) {
    const body=await request.json()
  var email = body.email
  const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "email": email
});
const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};
try{

  const response = await fetch("http://localhost:5000/api/auth/generateOTP", requestOptions)
  console.log(response)
   return new Response(JSON.stringify(response.status))
}
catch(e){
  console.log(e)
}



    
  return new Response(JSON.stringify(500))
}