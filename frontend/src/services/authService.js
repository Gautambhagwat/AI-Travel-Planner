const USERS_KEY = "ai-travel-planner.mock-users";
const DEMO_USER = {
  id: "demo-user",
  name: "Demo Traveller",
  email: "demo@travelplanner.app",
  password: "Password123",
};

const wait = (milliseconds = 350) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

const getUsers = () => {
  const storedUsers = localStorage.getItem(USERS_KEY);

  if (!storedUsers) {
    return [DEMO_USER];
  }

  try {
    return JSON.parse(storedUsers);
  } catch {
    return [DEMO_USER];
  }
};

const saveUsers = (users) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

const toPublicUser = (user) => ({
  id: user.id,
  name: user.name,
  email: user.email,
});

export async function registerUser({ name, email, password }) {
  await wait();

  const users = getUsers();
  const normalizedEmail = email.trim().toLowerCase();

  if (users.some((user) => user.email.toLowerCase() === normalizedEmail)) {
    throw new Error("An account already exists for this email.");
  }

  const user = {
    id: crypto.randomUUID(),
    name: name.trim(),
    email: normalizedEmail,
    password,
  };

  saveUsers([...users, user]);

  return toPublicUser(user);
}

export async function loginUser({ email, password }) {
  await wait();

  const normalizedEmail = email.trim().toLowerCase();
  const user = getUsers().find((item) => item.email.toLowerCase() === normalizedEmail);

  if (!user || user.password !== password) {
    throw new Error("Invalid email or password.");
  }

  return {
    token: `mock-token-${user.id}`,
    user: toPublicUser(user),
  };
}
