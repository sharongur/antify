import React, { useEffect } from 'react';
import { useGoogleAuth } from './useGoogleAuth';
import { Button } from "@chakra-ui/react";
import axios from 'axios'; // Make sure to install axios if you haven't

function SignInGoogle() {
    const { login, logOut, profile } = useGoogleAuth();

    useEffect(() => {
        if (profile) {
            // Send the profile information to your backend
            axios.post('http://localhost:5000/api/auth/google', profile)
                .then(response => {
                    console.log('Backend response', response.data);
                })
                .catch(error => {
                    console.error('Error posting profile to backend', error);
                });
        }
    }, [profile]); // This effect depends on the `profile`

    return (
        <div>
            <br />
            {profile ? (
                <div>
                    {/* Removed console.log and replaced with UI elements */}
                    <Button
                        variant='solid'
                        colorScheme='green'
                        fontSize='sm'
                        fontWeight='500'
                        borderRadius='70px'
                        px='44px'
                        py='5px'
                        isDisabled={true}  // Button is disabled when logged in
                    >
                        Verified
                    </Button>
                </div>
            ) : (
                <Button
                    variant='darkBrand'
                    color='white'
                    fontSize='sm'
                    fontWeight='500'
                    borderRadius='70px'
                    px='44px'
                    py='5px'
                    onClick={login}> Verify
                </Button>
            )}
        </div>
    );
}

export default SignInGoogle;
