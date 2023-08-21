// In /pages/api/createFolder.js or wherever you handle your API routes
import { NextResponse } from "next/server";
import { getCookie } from "@/utils/cookies";
export async function POST(request) {
    const tokenURL = 'https://api.dropboxapi.com/2/files/create_folder_v2';
    // Fetch the access token from the secure cookie
    const accessToken = getCookie(request, 'accessToken');
    if (!accessToken) {
        console.error('Access token not found in cookies.');
        return new NextResponse(401, { error: 'Unauthorized' });
    }

    try {
        const response = await fetch(tokenURL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`, // Extracting token from Bearer
                'Content-Type': 'application/json'
            },
            body: request.body
        });
        console.log("inside creating a folder scope")

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