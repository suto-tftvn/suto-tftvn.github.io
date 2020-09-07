
import React, { Component } from 'react';
import Layout from '../src/components/layout/layout'
import TeamComps from './pages/team_comps'
import Home from './pages/home'
import Library from './pages/library'
import Champions from './pages/library/components/Chamipons'
import Origins from './pages/library/components/Origins'
import Classes from './pages/library/components/Classes'
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
                component: Library,
                routes: [
                    {
                        path: '/thu-vien/champions',
                        component: Champions
                    },
                    {
                        path: '/thu-vien/origins',
                        component: Origins
                    },
                    {
                        path: '/thu-vien/classes',
                        component: Classes
                    },
                    // {
                    //     path: '/thu-vien/*',
                    //     // to: '/thu-vien/champions'
                    //     component: Champions
                    // },
                ]
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