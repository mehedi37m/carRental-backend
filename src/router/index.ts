import { Router } from "express";

const router = Router();


const moduleRouters = []

moduleRouters.forEach((route) => router.use(route.path, route.router));

export default router;