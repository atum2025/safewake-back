import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Checa se já existe usuário salvo no AsyncStorage (login persistente)
  useEffect(() => {
    async function loadStorageData() {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        setUser(JSON.parse(userData));
      }
      setLoading(false);
    }
    loadStorageData();
  }, []);

  // Realiza login
  const signIn = async (email, password) => {
    try {
      // Aqui mais tarde vai chamar o backend para autenticar:
      // (depois refatorar para AuthAPI)
      const response = await fetch('http://SEU_IP_LOCAL:4000/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (data && data.token) {
        await AsyncStorage.setItem('user', JSON.stringify(data));
        setUser(data);
        return true;
      } else {
        throw new Error(data.message || 'E-mail ou senha inválidos.');
      }
    } catch (err) {
      throw new Error(err.message || 'Erro ao conectar ao servidor.');
    }
  };

  // Realiza logout
  const signOut = async () => {
    await AsyncStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
