import { render } from '@testing-library/react';
import React, {Component, useState} from 'react';
import {useWallet, usewallet, UseWalletProvider} from 'use-wallet'

function Connection(){
    let chainId = null
    const [error, setError] = useState(true)
    
    
    window.ethereum.on('chainChanged', (chainId) => {
        console.log(chainId)
        //window.location.reload();
        chainId !== "0x4" ?  setError(true) : setError(false)
        
      });
    window.ethereum.on('connect', (a) =>{
        console.log(a)
        
    });
    const wallet = useWallet()
    const connectWallet = async(e) => {
        e.preventDefault();
        await wallet.connect()
        chainId = await window.ethereum.request({
            method:  'eth_chainId',
        })
        chainId !== "0x4" ?  setError(true) : setError(false)
        
    }
    return(
        <div>
            <button onClick={connectWallet} > CONNECT TO METAMASK</button>
            {error?
            <p>YOU ARE NOT CONNECTED TO RINKBEY PLEASE CONNECT TO RINKBEY</p> :
            <p>YOU ARE CONNECTED TO RINKBEY</p>
            }
        </div>
    )
}

export default () => (
    <UseWalletProvider
      chainId={1}
      connectors={{
        // This is how connectors get configured
        provided: {provider: window.cleanEthereum}
      }}
    >
      <Connection />
    </UseWalletProvider>
  )

