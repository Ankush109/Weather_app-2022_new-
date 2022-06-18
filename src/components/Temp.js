import React, { useState,useEffect } from 'react'
import "./style.css"
import Weathercard from './Weathercard'
function Temp() {
const[searchval,setsearchval]=useState("Kolkata")
const [tempinfo,settempinfo]=useState("")


    const getweatherinfo = async()=>{
try {
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchval}&units=metric&appid=a75c078e22a6bf2f0804b0a30a1d2931`
const res =await fetch(url)
const data = await res.json()
console.log(data);
const {temp,humidity,pressure}=data.main
const{main:weathermood}=data.weather[0]
const {name}=data
const{speed}=data.wind
const{country,sunset}=data.sys
const mynewweatherinf0={
    temp,humidity,pressure,name,speed,weathermood,country,sunset
}
settempinfo(mynewweatherinf0)
console.log(temp);
} catch (error) {
    console.log(error);
}
    }
    useEffect(()=>{
        getweatherinfo()
    },[])
    return (

        <>
            <div className="wrap">
                <div className="search">
                    <input
                        type="search"
                        placeholder="search..."
                        autoFocus
                        id="search"
                        className="searchTerm"
                        value={searchval}
                        onChange={(e)=>setsearchval(e.target.value)}

                    />

                    <button
                        className="searchButton"
                        type="button"
                        onClick={getweatherinfo}
                    >
                        Search
                    </button>
                </div>
            </div>

            <Weathercard tempinfo={tempinfo}/>
        </>

    )
}

export default Temp