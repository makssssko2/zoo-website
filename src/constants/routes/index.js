const navRoutes = [{
    path: '/',
    name: 'Главная',
    authRequired: false,
    adminRequired: false,
}, {
    path: '/animals',
    name: 'Животные',
    authRequired: false,
    adminRequired: false,
}, {
    path: '/gallery',
    name: 'Галлерея',
    authRequired: false,
    adminRequired: false,
}, {
    path: '/maps',
    name: 'Карты',
    authRequired: false,
    adminRequired: false,
}, {
    path: '/admin',
    name: 'Панель администратора',
    authRequired: true,
    adminRequired: true,
}]

const adminRoutes = [{
    path: '/admin/enclosures',
    name: 'Вольеры'
}, {
    path: '/admin/tickets',
    name: 'Билеты'
}, {
    path: '/admin/checkups',
    name: 'Осмотры'
}]


export {
    navRoutes,
    adminRoutes
}