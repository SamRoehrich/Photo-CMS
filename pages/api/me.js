import auth0 from "../../utils/auth0";

export default async function me(req, res) {
  try {
    await auth0.handleProfile(req, res, {});
  } catch (e) {
    console.log(e);
    res.status(e.status || 500).end(e.message);
  }
}
