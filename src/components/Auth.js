import React, { useEffect, useState, useRef } from "react";
import { accountsSdk } from "@livechat/accounts-sdk";

import Loading from "./Loading";
import Centered from "./Centered";

const contains = (arr, target) => target.every(v => arr.includes(v));

const Auth = ({ children, signIn, clientId, requiredScopes = [], insufficientRights: InsuficcientRight }) => {
    const [loading, setLoading] = useState(true);
    const [auth, setAuth] = useState(null);
    const authInstance = useRef(null);

    useEffect(() => {
        authInstance.current = accountsSdk.init({
            client_id: clientId,
            onIdentityFetched: (error, data) => {
                setLoading(false);
                if (data) {
                    setAuth(data);
                }
                if (error) {
                    console.error(error);
                }
            }
        });
    }, [clientId]);

    if (loading) {
        return (
            <div>
                <Loading />
            </div>
        );
    }
    console.log(auth);
    if(auth !== null && !contains(auth.scopes, requiredScopes)) {
        return ((InsuficcientRight && <InsuficcientRight />) || null);
    }

    return (
        <AuthContext.Provider value={auth}>
            {auth !== null ? children : signIn(authInstance)}
        </AuthContext.Provider>
    );
};



export const AuthContext = React.createContext(null);
export default Auth;