const resolveRoutes = (route) => {
    if (route.length<=3){
        let xxx = route === '/' ? route : '/:id'//Porque retornamos esto?:'/:id'
        //console.log(xxx);
        return xxx
    }

    return `/${route}`
}

export default resolveRoutes;