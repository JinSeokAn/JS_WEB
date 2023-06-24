export function updateHeaderToken(options) {
  const update = { ...options };
  if (localStorage.accessToken) {
    update.headers = {
      ...update.headers,
      'X-AUTH_TOKEN' : localStorage.accessToken,
    };
  }
  return update;
}