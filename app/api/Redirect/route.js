import { NextResponse } from 'next/server';

export async function POST(request) {

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

        const responseData = await response.json();

        if (!response.ok) {
            console.log('Error:', responseData);
            return new NextResponse(500, { error: 'Failed to obtain access token' });
        }

        console.log('Access Token:', responseData.access_token);
        return new NextResponse(200, responseData);

    } catch (error) {
        console.log('Error:', error.message);
        return new NextResponse(500, { error: 'An error occurred' });
    }
}
