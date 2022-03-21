const dev = process.env.NODE_ENV !== "production" // chế độ dev hay production
export const server = dev ? "http://localhost:3000" : "demo-next-project.vercel.app" // where's server?
// export const server = "http://localhost:3000";