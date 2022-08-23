import React, { useEffect, useState } from 'react';
const StateWise=()=>{
    const [data,setData]=useState([]);
    const getCovidData=async()=>{
        const res=await fetch('https://data.covid19india.org/data.json');
        const actualData=await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    }
    useEffect(()=>{
        getCovidData();
    },[]);
    return(
        <>
        <div className='container-fluid mt-5'>
            <div className='main-heading text-center'>
                <h1 className='mb-5'>
                <span className='font-weight-bold'>INDIA</span> COVID-19 DASHBOARD
                </h1>
            </div>
        </div>
        <div className='fluid-container'>
            <table className='table table-hover'>
                <thead className='thead-dark'>
                    <tr>
                    <th>STATE</th>
                    <th>CONFIRMED</th>
                    <th>RECOVERED</th>
                    <th>DEATHS</th>
                    <th>ACTIVE</th>
                    <th>UPDATED</th>
                    </tr>
                </thead>
                <tbody>
                {
                    data.map((val,index)=>{
                    return(
                 <>
                    <tr key={index}>
                    <td>{val.state}</td>
                    <td>{val.confirmed}</td>
                    <td>{val.recovered}</td>
                    <td>{val.deaths}</td>
                    <td>{val.active}</td>
                    <td>{val.lastupdatedtime}</td>
                   </tr>
                </>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
        
        </>
    )
}
export default StateWise;