import { fetchFromAPI } from '@/utils/api';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code'); // Retrieve the 'code' from the query string

  if (!code) {
    return NextResponse.json({ error: 'Authorization code is missing' }, { status: 400 });
  }

  // Call external API to exchange code for tokens
  const data = await fetchFromAPI('auth/callback', { params: { redirect_uri: process.env.NEXT_PUBLIC_HOST_API + '/api/login/google', code: code } });
  const tokenResponse = await data.json();
  if (data.ok) {
    // Set tokens as cookies or return as needed
    const token = tokenResponse.data.token;
    const response = NextResponse.redirect(new URL('/', request.url)); // Redirect to "/"
    response.cookies.set('access-token', token, {
      httpOnly: true,
      secure: false,
      path: '/'
    });
    return response;
  }
  console.log(tokenResponse);
  
  const response = NextResponse.redirect(new URL(`/login?error=${tokenResponse.message}`, request.url)); // Redirect to "/"
  response.cookies.delete('access-token');
  return response;

}
