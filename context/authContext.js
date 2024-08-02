
"use client";
import { verify } from "crypto";
import React, {createContext, useEffect, useState} from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children})=>{

    const [dummy, setDummy] = useState("dummy")
    const [details, setDetails] = useState()

    const generateOTP = async(formData)=>{
        try {
            const response = await fetch('http://localhost:5000/api/auth/generateOTP',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            const data = await response.json()
            console.log(data)
            if(data.status == 'success'){
            }else{
                console.log('cant generateOTP')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const verifyOTP = async()=>{
        try {
            const response = await fetch("http://localhost:5000/api/auth/verifyotp",{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            const data = await response.json()
            console.log(data)
            if(data.success) {
                localStorage.setItem('authToken',data.authToken)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const updateDetails = async()=>{
        try {
            const response = await fetch("http://localhost:5000/api/auth/updateDetails",{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    const getUser = async(token)=>{
        try {
            const response = await fetch("http://localhost:5000/api/auth/getuser",{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                },
                body: JSON.stringify(formData),
            })
            const data = await response.json()
            console.log(data)
            setDetails(data)
        } catch (error) {
            console.log(error)
        }
    }



    useEffect(()=>{
        const token = localStorage.getItem('authToken')
        if(token) {
            getUser(token)
        }
    },[])

    return(
        <AuthContext.Provider value={{dummy, generateOTP, verifyOTP, updateDetails, details}}>
            {children}
        </AuthContext.Provider>
    )
}