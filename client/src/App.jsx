import { GoogleOAuthProvider } from '@react-oauth/google';
import Messenger from './components/Messenger'
import {AccountProvider,  useGlobalContext } from './context/AccountProvider';




function App() {
  const clientId = '796139187710-7kkq7dkd5v4013dvlt70cgp79mus0mv4.apps.googleusercontent.com';
  const hi = useGlobalContext();
  console.log(hi);
  
  return (
    <GoogleOAuthProvider clientId={clientId}>
        <Messenger />
    </GoogleOAuthProvider>
  )
}

export default App
