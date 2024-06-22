class Client {
    #login;
    #email;
    constructor(login, email) {
      this.#login = login;
      this.#email = email;
    }
    getLogin() {
      return this.#login;
    }
    setLogin(newLogin) {
      this.#login = newLogin;
    }
    getEmail() {
      return this.#email;
    }
    setEmail(newEmail) {
      this.#email = newEmail;
    }
}
  
const client = new Client("user", "user@mail.com");
console.log(client.getLogin());
console.log(client.getEmail());

client.setLogin("newUser");
client.setEmail("newUser@mail.com");

console.log(client.getLogin());
console.log(client.getEmail());