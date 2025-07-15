'use client';

import { ReactNode, useEffect } from 'react';
import type { User } from '@/shared/types/user';
import {useAuth} from "@/features/auth/store/useAuth";

type Props = {
    user: User | null;
    children: ReactNode;
};

export const AuthProvider = ({ user, children }: Props) => {
    const setUser = useAuth((s) => s.setUser);

    useEffect(() => {
        if (user) {
            setUser(user);
        }
    }, [user]);

    return <>{children}</>;
};
