
import React, { Component } from 'react';
import Layout from '../src/components/layout/layout'
import TeamComps from './pages/team_comps'
import Home from './pages/home'
import Library from './pages/library'
import { renderRoutes } from 'react-router-config'

export const routes = [
    {
        component: Layout,
        routes: [
            {
                path: '/',
                exact: true,
                component: Home
            },
            {
                path: '/thu-vien',
                component: Library
            },
            {
                path: '/xep-team',
                component: TeamComps,
                // routes: [
                //     {
                //         path: '/child/:id/grand-child',
                //         component: GrandChild
                //     }
                // ]
            }
        ]
    }
]