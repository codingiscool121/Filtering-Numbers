import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
const evennumber=[2, 4, 6, 8,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100]
const oddnumbers = [3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,46,49,52,55]

function Welcome() {
  return (
    <even>
      <Text style={styles.evenNumbers}>
                       <pre>Even Numbers:</pre>
      {evennumber.filter(evennumber => evennumber).map(filteredNumber => (
        <pre>
                               {filteredNumber}
        </pre>
      ))}
       </Text>
    
      <odd>
     <Text style={styles.oddNumbers}> 
                        <pre>Odd Numbers:</pre>
     {oddnumbers.filter(oddnumbers=>oddnumbers).map(oddfiltered=>(
         <pre>
                                {oddfiltered}
           </pre>  
       ))}
      </Text>
      </odd>
    </even>

  );
}

const styles=StyleSheet.create({
  evenNumbers:{
  color:"#D2B48C",
  margin:20,
  padding:25,
  fontSize:20,
  textAlign:'center'
  },

  oddNumbers:{
    color:"#000080",
    margin:20,
    padding:25,
    fontSize:20,
    textAlign:'center',
  },
})

export default Welcome;