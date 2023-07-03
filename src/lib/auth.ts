import bcrypt from "bcryptjs";

export async function hashPassword(password: string) {
  return await bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hashedPassword: string) {
  return await bcrypt.compare(password, hashedPassword);
}

export async function signUpUser(email: string, password: string) {
  try {
    const result = await fetch("http://localhost:3000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (result.ok) {
      const data: CreateUserResponse = await result.json();
      return data;
    }

    return false;
  } catch (error) {
    return false;
  }
}

export type CreateUserResponse = {
  message: string;
  isValid: boolean;
};
