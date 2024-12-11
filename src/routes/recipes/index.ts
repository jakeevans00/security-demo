import { FastifyInstance } from "fastify";

export const recipeRoutes = async (fastify: FastifyInstance) => {
  fastify.get("recipes", async () => {
    return {};
  });
};
