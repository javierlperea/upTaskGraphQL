/*** Aca se definen los typedefinitios, de esta forma se da estructura a los datos que va a mostrar el cliente
** Los typedefinitios son estrucutras de datos en los que se define su tipo (String)
El unico que es obligatorio es type Query y va a contener las funciones que tambien deben estar en los resolvers
Los querys son las funciones que se encargan de consultar la DB
** type Curso { titulo: String }     <-- Pide el titulo de tipo string que se encuentra en los cursos
** type Query { obtenerCursos: [Curso] }    <-- retorna muchos cursos gracias a la sintaxis de array, si lo quisiera un curso
necesitaria usar un filter en la funcion de los resolvers -->        obtenerCursos: () => cursos
** Cuando defino dentro Query --> obtenerCursos: [Curso] ó obtenerTecnologia: [Tecnologia] 
debo definir arriba type Curso{} y type Tecnologia{} especificando el tipo de dato que debe retornar
** type Mutation { crearUsuario: String} tiene una funcion que devuelve un mensaje de texto(String)
** DEFINIR UN INPUT en GraphQL sirve para simular la entrada de los datos( es la forma de pasar argumentos o parametros hacia los resolvers)
input UsuarioInput { nombre email password }  va a tener la entrada de datos para la creacion de usuario, para que los datos sean 
obligatorios se agrega un "!" al final de la linea -->  input UsuarioInput { nombre: String!  email: String!  password: String! }
** RECIBIR LOS DATOS DEL INPUT EN LA FUNCION MUTATION -->  crearUsuario(input: UsuarioInput) : String   <--  va a retornar un String
*** EJECUTARLO EN GRAPHICAL (npm run dev --> localhost) 
mutation {
  crearUsuario(input: {
    nombre: "Javier"
    email: "javier@gmail.com"
    password: "123456"
  })
} 
*** La funcion autenticarUsuario(input: AutenticarInput) : String debe tener un input diferente al del registro porque solo utiliza email y password
*** Con JWT autenticarUsuario ahora retorna un Token, por lo que debo definirlo --> type Token {}

*/

const { gql } = require('apollo-server');


const typeDefs = gql`

    type Curso {
        titulo: String
    }

    type Tecnologia {
        tecnologia: String
    }

    type Query {
        obtenerCursos: [Curso]

        obtenerTecnologia: [Tecnologia]
    }

    input UsuarioInput {
        nombre: String!
        email: String!
        password: String!
    }

    input AutenticarInput {
        email: String!
        password: String!
    }

    type Token {
        token: String
    }

    type Mutation {
        crearUsuario(input: UsuarioInput) : String

        autenticarUsuario(input: AutenticarInput) : Token
    }

`;

module.exports = typeDefs;