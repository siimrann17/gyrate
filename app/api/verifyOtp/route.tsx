import { cookies } from "next/headers";
export  async function POST(request :Request) {
    const body=await request.json()
    var email = body.email
    var otp = body.otp
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
const raw = JSON.stringify({
  "email": email,
  "otp": otp
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};
try{
  const response = await fetch("http://localhost:5000/api/auth/verifyotp", requestOptions)
  console.log("hi")
  console.log(response)
  console.log("hi")
  console.log(response.status)
  if (response.status ==200){
var data =await response.json()
    const a={
      "status": 1,
      "auth-token":data.authtoken
    }
    cookies().set('auth-token',data.authtoken)
    return new Response(JSON.stringify(a))
  }
   const  a={
      "status": 0
    }
      return new Response(JSON.stringify(a))
}
catch(e){
  console.log(e)
  var data = {
    "status": 0,
  }
}
 
return new Response(JSON.stringify(500))
}