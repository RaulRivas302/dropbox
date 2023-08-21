'use client';
import React, { useState, useEffect } from 'react';

const page = () => {

    const [inputValue, setInputValue] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    // This can be a useEffect in your React component that handles the redirect:

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        if (code) {
            console.log("got the code");
            // If there's a code in the URL, call the API to exchange it for an access token.
            fetch("/api/Redirect", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ code }),
                credentials: 'include'  // Include cookies in the request
            })
                .then(async res => {
                    const rawText = await res.text();
                    console.log("Raw response body text:", rawText);

                    let data;
                    try {
                        data = JSON.parse(rawText);
                        console.log(data);
                    } catch (e) {
                        console.error("Failed to parse response as JSON:", e);
                    }

                    return data; // Return the parsed data to the next then() block.
                })
                .then(data => {
                    console.log(data);
                    if (data && data.access_token) {
                        // window.sessionStorage.setItem('accessToken', data.access_token);
                        // Remove the code from the URL once the token has been fetched successfully
                        window.history.replaceState({}, document.title, window.location.pathname);
                    } else {
                        console.error('Failed to obtain the access token', data);
                    }
                })
                .catch(err => {
                    console.error('Error-Reason:', err);
                });
        }
    }, []);


    useEffect(() => {
        if (inputValue.trim() === '') {
            setIsButtonDisabled(true);
        } else {
            setIsButtonDisabled(false);
        }
    }, [inputValue])

    const createFolder = async () => {
        const folderName = inputValue;
        const response = await fetch('/api/CreateFolder', {
            method: 'POST',
            headers: {
                // "Authorization": `Bearer ${accessToken}`,
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({ path: `/${folderName}` }),
            credentials: 'include'
        });
        // const data = await response.json();
        // Check if response has content before parsing
        const text = await response.text();
        const data = text ? JSON.parse(text) : {};
        if (!response.ok) {
            console.error('Failed to create folder:', data);
            return;
        }

        alert("Created");
        setInputValue("");
        console.log('Folder created:', data);
    }
    return (
        <div className="min-h-screen flex flex-col  items-center bg-gradient-to-r from-blue-900 via-gray-900 to-black">
            <h1 className="text-6xl font-extrabold text-blue-400 mb-10 tracking-wider shadow-lg px-5 py-2 bg-opacity-20 rounded">Dropbox</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Folder Name"
                className="mb-4 py-2 px-4 border rounded"
            />
            <button onClick={createFolder} disabled={isButtonDisabled} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Create New Folder
            </button>
        </div>
    )
}

export default page
