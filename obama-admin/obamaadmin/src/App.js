import logo from './logo.svg';
import {Admin, Resource, ListGuesser, EditGuesser} from 'react-admin';
import { UserList } from './components/Users';
import jsonServerProvider from 'ra-data-json-server';
import './App.css';
import { PostList, PostCreate, PostEdit } from './components/Posts';
import authPovider from './providers/authPovider';
import { FirebaseAuthProvider } from 'react-admin-firebase';

//amandamariadomingos@gmail.com
const config = {
  apiKey: "AIzaSyAV96qvRLPwPmpyF7l9gDX0ywAAkkjIgO8",
  authDomain: "obamaadmin.firebaseapp.com",
  databaseURL: "https://obamaadmin.firebaseio.com",
  projectId: "obamaadmin",
  storageBucket: "obamaadmin.appspot.com",
  messagingSenderId: "400038510159",
};

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
//const firebaseAuthProvider = FirebaseAuthProvider(config);

function App() {
  return (
    <Admin dataProvider={dataProvider} authProvider={authPovider}>
      <Resource name="users" list={UserList} />
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate}/>
    </Admin>
  );
}

export default App;
