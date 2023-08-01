import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import './App.css'
import TimestampForm from './components/Timestamp'

// boiler plate Apollo stuff so that we can use CRUD with our front-end
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <TimestampForm/>
    </ApolloProvider>
  );
}

export default App
