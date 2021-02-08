import { useState } from 'react'; 
import fire from '../../config/fire-config';
import { useRouter } from 'next/router';
import Layout from '../../components/layout'

const Register = () => {

  const notifyFormErrorWithTimeout = (message, timeoutMs=3000) => {
    setNotification(message)
    setTimeout(() => {
      setNotification('')
    }, timeoutMs)
    setPassword('');
    setPassConf('');
  }

  const router = useRouter();
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passConf, setPassConf] = useState('');
  const [notification, setNotification] = useState('');
  const handleLogin = (e) => {
    e.preventDefault();
    if (password !== passConf) {
      notifyFormErrorWithTimeout('Password and password confirmation does not match')
      return null;
      }
    fire.auth()
      .createUserWithEmailAndPassword(userName, password)
      .then((userCredential) => {
          router.push("/");
        })      
      .catch((err) => {
        notifyFormErrorWithTimeout(`${err.code} : ${err.message}`)
      })
  }
  return (
    <Layout>
      <h1>Create new user</h1>
        {notification}
      <form onSubmit={handleLogin}>
        Email: <input type="text" value={userName} 
        onChange={({target}) => setUsername(target.value)} /> 
        <br />
        Password: <input type="password" value={password} 
        onChange={({target}) => setPassword(target.value)} /> 
        <br />
        Password conf: <input type="password" value={passConf}    
        onChange={({target}) => setPassConf(target.value)} /> 
        <br />
        <button type="submit">Login</button>
      </form>
    </Layout>
  )
}
export default Register