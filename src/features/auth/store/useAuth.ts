import { create } from 'zustand';
import {User} from "@/shared/types/user";


type AuthStore = {
    user: User | null;
    isAuthenticated: boolean;
    setUser: (user: User) => void;
    logout: () => void;
};

export const useAuth = create<AuthStore>((set) => ({
    user: null,
    isAuthenticated: false,

    setUser: (user) => set({ user, isAuthenticated: true }),

    logout: async () => {
        try {
            await fetch('/api/logout', { method: 'GET', credentials: 'include' });
        } catch (err) {
            console.error('Logout error:', err);
        }
        set({ user: null, isAuthenticated: false });
    },

}));

