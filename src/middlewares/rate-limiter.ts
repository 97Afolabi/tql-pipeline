import rateLimit from "express-rate-limit";

export const rateLimiter = rateLimit({
  windowMs: 1, // 1 seconds
  max: 3, // Limit each IP to 3 requests per `window` (here, per 1 seconds)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
