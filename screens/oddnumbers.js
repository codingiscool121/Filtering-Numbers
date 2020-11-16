import React from 'react';

const oddnumbers = [3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43]

function Welcome2() {
    return(
        <div>
       {oddnumbers.filter(oddnumbers=>oddnumbers).map(oddfiltered=>(
         <li>{oddfiltered}</li>  
       ))}
        </div>
    )
}

export default Welcome2;