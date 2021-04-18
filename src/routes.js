
import React, { Component } from 'react';
import Layout from '../src/components/layout/layout'
import TeamComps from './pages/team_builder'
import Home from './pages/home'
import Library from './pages/library'
import Champions from './pages/library/components/Chamipons'
import Origins from './pages/library/components/Origins'
import Classes from './pages/library/components/Classes'
import Items from './pages/library/components/Items'
import Item from './pages/item'
import Champion from './pages/champion'
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
                        path: '/thu-vien/tuong',
                        component: Champions
                    },
                    {
                        path: '/thu-vien/he',
                        component: Origins
                    },
                    {
                        path: '/thu-vien/toc',
                        component: Classes
                    },
                    {
                        path: '/thu-vien/trang-bi',
                        component: Items
                    },
                    // {
                    //     path: '/',
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
            },
            {
                path: '/trang-bi',
                component: Item,
            },
            {
                path: '/tuong',
                component: Champion,
            }
        ]
    }
]