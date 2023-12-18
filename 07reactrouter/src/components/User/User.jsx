import React  from "react";
import { useParams } from "react-router-dom";

export function User(){
    const {userid}=useParams();
    return(
        <>
        <h1 className="bg-sky-400 text-2xl text-center p-3">User Name :{userid}</h1>
        </>
    )
}