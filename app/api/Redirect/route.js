import { NextResponse } from 'next/server';
import { withIronSession } from 'next-iron-session';
import { setSecureCookie } from '@/utils/cookies';

export async function POST(request) {
    console.log("entered");

    const body = await request.json();
    const { code: authorizationCode } = body;

    if (!authorizationCode) {
        return new NextResponse(400, { error: 'Authorization code missing' });
    }
    const tokenURL = 'https://api.dropboxapi.com/oauth2/token';
    const credentials = `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`;
    const base64Credentials = Buffer.from(credentials).toString('base64');

    const headers = {
        'Authorization': `Basic ${base64Credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    };

    const data = new URLSearchParams();
    data.append('grant_type', 'authorization_code');
    data.append('code', authorizationCode);
    data.append('redirect_uri', process.env.REDIRECT_URI);

    try {
        const response = await fetch(tokenURL, {
            method: 'POST',
            headers,
            body: data.toString(),
        });
        console.log('Dropbox API Response:', response);
        console.log('Dropbox API Response Status:', response.status);

        const responseData = await response.json();
        console.log('Dropbox API Response Data:', responseData);

        if (!response.ok) {
            console.log('Error:', responseData);
            return new NextResponse(500, { error: 'Failed to obtain access token' });
        }
        const res = new NextResponse(200, responseData);
        try {
            setSecureCookie(res, 'accessToken', responseData.access_token);
            console.log('Setting accessToken cookie:', responseData.access_token);
        } catch (error) {
            console.error("Error setting cookie:", error);
            return new NextResponse(500, { error: 'Failed to set the cookie' });
        }


        console.log('Access Token:', responseData.access_token);
        // console.log('Response Data:', responseData);

        // setSecureCookie(res, 'accessToken', responseData.access_token);
        // console.log('Setting accessToken cookie:', responseData.access_token);
        return res;
        // return new NextResponse(200, responseData);

    } catch (error) {
        console.log('Error:', error.message);
        return new NextResponse(500, { error: 'An error occurred' });
    }
}
