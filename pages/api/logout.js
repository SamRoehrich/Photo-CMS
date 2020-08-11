import auth0 from "../../utils/auth0";

export default async function logout(req, res) {
  try {
    await auth0.handleLogout(req, res);
  } catch (e) {
    console.log(e);
    res.status(e.status || 500).end(e.message);
  }
}
