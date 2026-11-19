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

async function updateUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Alex Updated",
          email: "alexupdated@example.com",
        }),
      },
    );

    if (!response.ok) {
      throw new Error("Failed to update user");
    }

    const updatedUser = await response.json();

    console.log(updatedUser);
  } catch (error) {
    console.log(error.message);
  }
}

async function patchUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Alex Patched",
        }),
      },
    );

    if (!response.ok) {
      throw new Error("Failed to patch user");
    }

    const patchedUser = await response.json();

    console.log(patchedUser);
  } catch (error) {
    console.log(error.message);
  }
}

async function deleteUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
      {
        method: "DELETE",
      },
    );

    if (!response.ok) {
      throw new Error("Failed to delete user");
    }

    console.log("User deleted successfully");
  } catch (error) {
    console.log(error.message);
  }
}

async function checkUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/999",
    );

    console.log("Status:", response.status);
    console.log("Successful:", response.ok);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const user = await response.json();
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
}

async function getUserPosts(userId, limit) {
  try {
    const params = new URLSearchParams({
      userId: userId,
      _limit: limit,
    });

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?${params.toString()}`,
    );

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts = await response.json();

    posts.forEach((post) => {
      console.log(post.title);
    });
  } catch (error) {
    console.log(error.message);
  }
}

async function getProtectedData() {
  try {
    const response = await fetch("https://api.example.com/protected", {
      headers: {
        Authorization: "Bearer your-token",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch protected data");
    }

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

getUsers();
createUser();
updateUser();
patchUser();
deleteUser();
checkUser();
getUserPosts(5, 3);
