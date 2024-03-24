// useGoogleAuth.js
import { useState } from 'react';
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import axios from 'axios';

export function useGoogleAuth() {
    const [profile, setProfile] = useState(null);

    const login = useGoogleLogin({
        onSuccess: async (codeResponse) => {
            const userData = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${codeResponse.access_token}`, {
                headers: {
                    Authorization: `Bearer ${codeResponse.access_token}`,
                },
            });
            setProfile(userData.data);
        },
        onError: (error) => console.log('Login Failed:', error),
    });

    const logOut = () => {
        googleLogout();
        setProfile(null);
    };

    return { login, logOut, profile };
}
