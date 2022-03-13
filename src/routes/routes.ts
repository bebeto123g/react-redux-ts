import { FC, lazy, LazyExoticComponent } from 'react';
import Home from '../views/Home';

export type RouteType = {
    Element: FC | LazyExoticComponent<FC>;
    path: string;
    isAuth: boolean;
    title?: string;
};

export const routes: Array<RouteType> = [
    {
        path: '/',
        Element: Home,
        isAuth: false,
    },
    {
        path: '/success',
        Element: lazy(() => import('../views/Success')),
        isAuth: false,
    },
    {
        path: '/profile-edit',
        Element: lazy(() => import('../views/ProfileEdit')),
        isAuth: false,
    },    {
        path: '/terms',
        Element: lazy(() => import('../views/Terms')),
        isAuth: false,
    },
];
