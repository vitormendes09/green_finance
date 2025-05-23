'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import authControllerRegister from "@/controllers/User/Userregister";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("As senhas não coincidem");
      return;
    }

    try {
      const success = await authControllerRegister.registerUser(
        name,
        email,
        password,
        confirmPassword
      );
      if (success) {
        router.push("/pages/login");
      } else {
        setError("Erro ao registrar. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro de registro:", error);
      setError("Ocorreu um erro. Tente novamente.");
    }
  };
    return (
        <div>
            <h1>Registrar</h1>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Confirmar Senha"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button type="button" onClick={() => router.push("Index")}>
                    Voltar ao Login
                </button>
                
            </form>
            {error && <p>{error}</p>}
        </div>
    );
}