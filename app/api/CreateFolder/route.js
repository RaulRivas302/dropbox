// In /pages/api/createFolder.js or wherever you handle your API routes
import { NextResponse } from "next/server";
export default async function POST(request) {
    const tokenURL = 'https://api.dropboxapi.com/2/files/create_folder_v2';

    try {
        const response = await fetch(tokenURL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${request.headers.authorization.split(' ')[1]}`, // Extracting token from Bearer
                'Content-Type': 'application/json'
            },
            body: request.body
        });

        const responseData = await response.json();

        if (!response.ok) {
            console.error('Error:', responseData);
            return new NextResponse(response.status, responseData);
        }

        return new NextResponse(200, responseData);
    } catch (error) {
        console.error('Error:', error.message);
        return new NextResponse(500, { error: 'An error occurred while creating folder' });
    }
}
