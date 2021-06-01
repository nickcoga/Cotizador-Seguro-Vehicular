import { apiFetch, BASE_URL } from "./api_fetch";

function UsersService() {
  if (!UsersService.instance) {
    UsersService.instance = this;
  }
  return UsersService.instance;
}

// As my services have two parameters, their default values are null

UsersService.prototype.show = (nroDoc, typeDoc) =>
  apiFetch(
    `${BASE_URL}/users?${
      typeDoc === "Dni" ? `dni=${nroDoc}` : `passport=${nroDoc}`
    }`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    }
  );

export default UsersService;
