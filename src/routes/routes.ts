import { FC, lazy, LazyExoticComponent } from 'react';
import Home from '../views/Home';

export type RouteType = {
    Element: FC | LazyExoticComponent<FC>;
    path: string;
};

export const routes: Array<RouteType> = [
    {
        path: '/',
        Element: Home,
    },
    {
        path: '/success',
        Element: lazy(() => import('../views/Success')),
    },
    {
        path: '/profile-edit',
        Element: lazy(() => import('../views/ProfileEdit')),
    },    {
        path: '/terms',
        Element: lazy(() => import('../views/Terms')),
    },
];
