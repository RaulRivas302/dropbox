export const authorize = () => {
    return `https://www.dropbox.com/oauth2/authorize?client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&response_type=code&access_token_type=offline`;
}
export const redirect = async (code, req) => {
    const tokenURL = 'https://api.dropboxapi.com/oauth2/token';
    const credentials = `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`;
    const base64Credentials = Buffer.from(credentials).toString('base64');

    const headers = {
        'Authorization': `Basic ${base64Credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    };

    const data = new URLSearchParams();
    data.append('grant_type', 'authorization_code');
    data.append('code', code);
    data.append('redirect_uri', process.env.REDIRECT_URI);

    try {
        const response = await axios.post(tokenURL, data.toString(), { headers });
        console.log('Access Token:', response.data.access_token);
        //store access token in session
        req.session.accessToken = response.data.access_token;
        return response.data;
    } catch (error) {
        console.log('Error:', error.response ? error.response.data : error.message);
        throw error;
    }
};