import rateLimit from "express-rate-limit";

export const rateLimiter = rateLimit({
  windowMs: 1000, // 1 second
  max: 3, // Limit each IP to 3 requests per `window` (here, 3 per seconds)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
