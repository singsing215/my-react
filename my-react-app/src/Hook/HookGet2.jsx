import React, { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const response = await fetch(url);
            const data = await response.json();
            setData(data)
            setLoading(false)
        })();
    })

    return { data, loading }
}

const Demo6 = () => {

    const { data, loading } = useFetch("http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php")

    return (
        <div className="container">
            1. 自定义Hook fetch get <br />
            {loading ? <div>loading...</div> : data.chengpinDetails[0].title}
        </div>
    )
}

export default Demo6