// SignIn.js
import React from 'react';
import { useGoogleAuth } from './useGoogleAuth';
import {Button} from "@chakra-ui/react";

function SignIn() {
    const { login, logOut, profile } = useGoogleAuth();


    return (
        <div>
            <br />
            {profile ? (
                <div>
                    {console.log(profile)}
                    {/*<img src={profile.picture} alt="User" />*/}
                    {/*<h3>User Logged in</h3>*/}
                    {/*<p>Name: {profile.name}</p>*/}
                    {/*<p>Email: {profile.email}</p>*/}
                    {/*<button onClick={logOut}>Log out</button>*/}

                    <Button
                        variant='solid'
                        colorScheme='green' // Make the button green
                        fontSize='sm'
                        fontWeight='500'
                        borderRadius='70px'
                        px='44px'
                        py='5px'
                        isDisabled={true}
                    >
                        Apple ✅
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

export default SignIn;
