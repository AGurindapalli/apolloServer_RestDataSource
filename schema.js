import {gql} from 'apollo-server-express'

const typeDefs =gql`
    type Course{
        id:Int
        title:String
        author:String
        description:String
        topic:String
        url:String
    }
    type Person {
        gender: String
        email: String
    }
    type Query{
        allCourses:[Course]
        course(id:Int!):Course
        randomPerson: [Person]
    }
`;


export default typeDefs;