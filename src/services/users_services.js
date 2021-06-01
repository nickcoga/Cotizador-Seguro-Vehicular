import { apiFetch, BASE_URL } from "./api_fetch";

function UsersService() {
  if (!UsersService.instance) {
    UsersService.instance = this;
  }
  return UsersService.instance;
}

UsersService.prototype.show = (dni) =>
  apiFetch(`${BASE_URL}/users?dni=${dni}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });

export default UsersService;
