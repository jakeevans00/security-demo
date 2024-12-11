import { FastifyInstance } from "fastify";
import { recipeRoutes } from "./recipes";

export function routes(fastify: FastifyInstance) {
  fastify.register(recipeRoutes);
}
