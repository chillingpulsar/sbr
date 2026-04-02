import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async () => {
    return new Response('google-site-verification: google720ba10ae1095b28.html')
};
