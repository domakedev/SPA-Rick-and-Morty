// Nos marca la ruta del proyecto, sirve para nube o local
const path = require('path')

//Archivo para trabajar con HTML
const HtmlWebpackPlugin= require('html-webpack-plugin')//Para trabajar con HTML

//Creamos el modulo de configuracion y de salida
module.exports = {
    entry: ["@babel/polyfill", "./src/index.js"], //Indica de donde vendra nuestro codigo
    output:{ //Salida donde se guardara el proyecto estructurado y compilado listo para producción
        //(nos dice que creemos una carpeta, el nombre de la carpeta) para la salida del proyecto
        path: path.resolve(__dirname,"dist"),
        filename:"main.js" //Nombre del archivo para producción
    },
    resolve:{
        extensions:[".js"]//Extensiones con las que vamos a trabajar
    },
    module:{ //Reglas para nuestro proyecto
        rules: [
            {
                //Test de ayuda a la estructura de Babel
                test: /\.js?$/, //Usa regex para filtrar valores. Identificar archivos
                exclude: /node_modules/,//No tomamos en cuenta esta carpeta, sufi con package.json
                use:{ //Usaremos un loader o configuracion establecida para nuestro codigo
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins:[ // Establecer plugins para trabajar
        new HtmlWebpackPlugin( //Creado en base a la instancia del inicio
            {
                inject:true,//Inyectar un valor a un archivo HTML
                template:'./public/index.html',//Template principal ubicacion
                filename:'./index.html'//Saldra directo a la carpeta DIST configurada con el nombre...
            }
        )
    ]

}