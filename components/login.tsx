'use client';
import { chain, client } from "../utils/constants";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import Counter from "./counter";

const Login: React.FC = () => {
    const account = useActiveAccount();
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}> 
            {account ? (
                <div style={{textAlign: 'center'}}>
                    <ConnectButton 
                        client = {client}
                        chain = {chain}
                        connectModal={{
                            size: 'compact'}}
                    />
                    <Counter />
                </div>
            ) : (
                <div style={{textAlign: "center"}}>
                    <ConnectButton 
                    client = {client}
                    chain = {chain}
                    connectModal={{
                        size: 'compact'}} />
                </div>
            )}
            
        </div>
    );
};

export default Login;
