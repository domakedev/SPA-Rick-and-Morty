const resolveRoutes = (route) => {
    if (route.length<=3){
        return route === '/' ? route : '/:id'//Porque retornamos esto?:'/:id'
    }

    return `/${route}`
}

export default resolveRoutes;