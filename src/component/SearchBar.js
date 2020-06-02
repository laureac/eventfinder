import React, { useState} from 'react';


function SearchBar(props){
    
    const [value, setValue] = useState('');
    
    const clientId = 'UK4M32ISUNYENKVKB01XDU55BM4WFLV0NNA4ZIAZLPLRK3LU';
    const clientSecret = 'ANEWJEZOWCW1LIIS3TRTU2ZSUUYFJ0XHDWGYLJALH1TXLC3F';
    const url = 'https://api.foursquare.com/v2/venues/explore?near=';
    
    const handleChange = (e)=>{
        setValue(e.target.value);
    }
    
    const getEvent= async() =>{
        const urlToFetch = `${url}${value}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20200511`;
        try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
                            const jsonResponse = await response.json();
                            const venues = jsonResponse.response.groups[0].items.map(item => item.venue);
                            props.onResult(venues)
                            ;
                        }
        }
        catch(err){
                    console.log(err)
                }
    }
    
    return(
        <div>
                <input 
                    type='text'
                    placeholder="Enter A Place" 
                    value={value}
                    onChange={handleChange}
                />
                <button
                    onClick={getEvent}
                >Submit</button>
        </div>
    )
    
}

export default SearchBar;