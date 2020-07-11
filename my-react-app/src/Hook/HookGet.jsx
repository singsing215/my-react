import React,{ useState,useEffect } from "react"

const Demo6 = () =>{
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(() =>{
        (async () =>{
            const response = await fetch("http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php");
            const data = await response.json();
            setData(data)
            setLoading(false)
        })();
    })

    return(
        <div className="container">
            {loading ? <div>loading...</div> : data.chengpinDetails[0].title }
        </div>
    )
}

export default Demo6