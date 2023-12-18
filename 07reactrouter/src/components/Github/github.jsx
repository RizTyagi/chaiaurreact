import React from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    //const [data,setData] =useState("");
    return (
        <>
            <div className='flex bg-gray-100 w-50 h-screen p-4'>
                <h1 className='text-center text-1xl p-1'>
                    
                     Name : {data.name} <br/>
                     Company : {data.company || "NA"} <br/>
                     Blog : {data.blog} <br/>
                     Location : {data.location} <br/>
                     Email : {data.email || "NA"} <br/>
                    Followers : {data.followers}
                   
                </h1>
                <img src={data.avatar_url} className='w-30 h-20' alt='githubUserImage'></img>
            </div>
        </>
    )
}
export default Github;
// const {userName} ="hiteshchoudhary";
export const gitHubloader = async () => {
    const data = await fetch(`https://api.github.com/users/hiteshchoudhary`)
    return data.json();
}