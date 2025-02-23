const BASE_URL = "https://6686536483c983911b01b906.mockapi.io";

class Authentication {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  verifyData() {
    if (!this.email.endsWith("@gmail.com")) {
      throw new Error("emailError");
    }

    if (this.password.length < 5) {
      throw new Error("passwordError");
    }
  }

  async signup() {
    try {
      const getUsers = await fetch(`${BASE_URL}/users`);
      const users = await getUsers.json();

      
      const doesUserExists = users.find((user) => user.email === this.email);

      if (doesUserExists) {
        return {
          statusCode: 409,
          message: "the email is already exists",
          data: "",
        };
      }

      const response = await fetch(`${BASE_URL}/users`, {
        method: "POST",
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
        headers: {
          "content-type": "application/json",
        },
      });

      const createdUser = await response.json();
      return {
        statusCode: 201,
        message: "",
        data: createdUser,
      };
    } catch (error) {
      console.log("in catch block");
      console.log(error);
    }
  }

  async login() {
    const getUsers = await fetch(`${BASE_URL}/users`);
    const users = await getUsers.json();

    const doesUserExits = users.find((user) => user.email === this.email);

    if (!doesUserExits) {
      return {
        statusCode: 404,
        message: "Email incorrect",
        data: "",
      };
    }

    if (this.password !== doesUserExits.password) {
      return {
        statusCode: 404,
        message: "Password incorrect",
        data: "",
      };
    }

    return {
      statusCode: 200,
      message: "logged in successfully",
      data: doesUserExits,
    };
  }
}

export { Authentication };
