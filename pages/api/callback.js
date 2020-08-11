import auth0 from "../../utils/auth0";

export default async function callback(req, res) {
  try {
    await auth0.handleCallback(req, res, {});
  } catch (e) {
    console.log(e);
    res.status(e.status || 500).end(e.message);
  }
}
