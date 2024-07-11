import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export  async function POST(request :NextRequest) {
    const body=await request.json()
    var formData = body.formData
const authtoken =request.cookies.get("auth-token")
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("auth-token" ,authtoken.value)
console.log(authtoken)
const raw = JSON.stringify({
  "email": formData.email,
  "name":formData.name,
  "password":formData.password,
  "gender":formData.gender,
  "dateOfBirth":formData.dob,
  
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};
try{
  const response = await fetch("http://localhost:5000/api/auth/createuser", requestOptions)
  console.log("hi")
  console.log(response)
  console.log(await response.json())

}
catch(e){
 console.log(e)
}
 
return new Response(JSON.stringify(500))
}