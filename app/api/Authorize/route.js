import { NextResponse } from "next/server";
export async function GET(request) {
    return NextResponse.redirect(`https://www.dropbox.com/oauth2/authorize?client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&response_type=code&access_token_type=offline`);
}

