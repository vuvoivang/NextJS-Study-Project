const dev = process.env.NODE_ENV !== "production" // chế độ dev hay production
export const server = dev ? "http://localhost:3000" : "https://demo-next-project-1iqu1mlku-thuocsivuvh.vercel.app" // where's server?
// export const server = "http://localhost:3000";