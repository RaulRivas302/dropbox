
import { NextResponse } from 'next/server';

export function setSecureCookie(res, name, value) {
    const oneWeekInSeconds = 7 * 24 * 60 * 60;
    const secureFlag = process.env.NODE_ENV === 'production' ? 'Secure' : '';

    const cookieValue = `${name}=${value}; HttpOnly; ${secureFlag}; SameSite=Strict; Path=/; Max-Age=${oneWeekInSeconds}`;

    // Try to set the cookie directly
    if (!res.cookies) {
        res.cookies = [];
    }
    res.cookies.push(cookieValue);
}



export function getCookie(request, name) {
    const cookies = request.cookies;
    return cookies && cookies[name];
}
