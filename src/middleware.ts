import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async (context, next) => {
  // Generate cryptographically secure nonce
  const nonce = crypto.randomUUID();

  // Attach nonce to locals
  context.locals.nonce = nonce;

  const response = await next();

  // Add CSP header with nonce
  response.headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      `script-src 'self' 'nonce-${nonce}' https://vivritinextdev.wpenginepowered.com`,
      `style-src 'self' 'nonce-${nonce}'`,
      "img-src 'self' data: https://vivritinextdev.wpenginepowered.com",
      "connect-src 'self' https://vivritinextdev.wpenginepowered.com",
      "font-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'"
    ].join('; ')
  );

  return response;
};