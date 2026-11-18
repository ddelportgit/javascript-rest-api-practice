async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const users = await response.json();

    users.forEach((user) => {
      console.log(user.name);
    });
  } catch (error) {
    console.log(error.message);
  }
}

async function createUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Alex",
        email: "alex@example.com",
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }

    const newUser = await response.json();

    console.log(newUser);
  } catch (error) {
    console.log(error.message);
  }
}

createUser();
getUsers();
