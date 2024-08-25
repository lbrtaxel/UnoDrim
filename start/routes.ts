/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import AuthController from "#controllers/auth/auth_controller";
import router from "@adonisjs/core/services/router";

router
  .group(() => {
    router.get("/", () => ({ message: "Unodrim is alive!" }));
    router.post("/auth/login", [AuthController, "login"]);
    router.post("/auth/logout", [AuthController, "logout"]);
  })
  .prefix("/api");

router.get("/*", async ({ view }) => view.render("index"));
router.post("/*", async ({ response, request }) =>
  response.notFound({ error: `404: POST ${request.url()}` }),
);
