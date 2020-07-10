import ApolloClient  from 'apollo-client'
import { createHttpLink,HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import {server} from './settings'
const _server = `${server}/graphql/`
import Cookie from 'js-cookie'

const httplink = createHttpLink({
    uri:_server,
    credentials: 'same-origin'
  });
  const authLink = setContext((_, { headers }) => {
    const token = Cookie.get("token") 
    if(token=="undefined"){
      token = ""
    }

    return {
      headers:{
        ...headers,

        'Authorization':`JWT ${token==undefined?"":token}`
      }
    }
  });


const client = new ApolloClient({
    link: authLink.concat(httplink),
    cache : new InMemoryCache(),
})


export default client
