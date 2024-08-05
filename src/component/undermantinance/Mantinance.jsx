import React from 'react';
// import './MantinanceStyle.css'

function Mantinance() {
  return (
    <div className='mantinance_wrapper' style={{
        height: '95vh',
        width:'100vh',
        margin:'auto',   
        // backgroundColor:'#f7f2ffd5',
    }}
    >
      <p style={{
        height: '100%',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',

       
   
    }}>Website is under maintanance
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </p>
    </div>
  );
}

export default Mantinance;
