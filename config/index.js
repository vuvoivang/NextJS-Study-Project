const dev = process.env.NODE_ENV !== "production" // chế độ dev hay production
export const server = dev ? "http://localhost:3000" : "https://mywebsites.com"