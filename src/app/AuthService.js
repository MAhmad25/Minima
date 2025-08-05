import { Client, Account, ID } from "appwrite";
import secret from "../config/Keys";
export class AuthService {
      client = new Client();
      account;
      constructor() {
            this.client.setEndpoint(secret.base_url).setProject(secret.project_id);
            this.account = new Account(this.client);
      }
      async createAccount({ email, password, username }) {
            try {
                  await this.account.create(ID.unique(), email, password, username);
                  return this.Login({ email, password });
            } catch (error) {
                  console.log(error.message);
            }
      }
      async Login({ email, password }) {
            try {
                  await this.account.createEmailPasswordSession(email, password);
                  return true;
            } catch (error) {
                  console.log(error.message);
                  return false;
            }
      }
      async Logout() {
            try {
                  return await this.account.deleteSession("current");
            } catch (error) {
                  console.log("Unable to logout", error.message);
            }
      }
      async getCurrentUser() {
            try {
                  const user = await this.account.get();
                  if (user) return user;
                  else return false;
            } catch (err) {
                  console.log("User is not Logged in ", err.message);
                  return false;
            }
      }
}
const appAuth = new AuthService();
export default appAuth;
