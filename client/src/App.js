import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../src/assets/styled/globalStyed.scss';
import './App.scss';
import { userProfile } from './features/Auth/authSlice';
import Routers from './routers';

function App() {
   const dispatch = useDispatch();

   useEffect(() => {
      try {
         if (!localStorage.getItem('access_token')) return;
         const action = userProfile();
         dispatch(action);
      } catch (error) {
         console.log(error);
      }
   }, []);

   return (
      <div>
         <Routers />
      </div>
   );
}

export default App;
