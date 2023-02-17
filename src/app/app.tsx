// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { Route, Routes } from 'react-router-dom';
import Page from './page/page';

export function App() {
  return (
    <>   
     <Routes>
        <Route path="" element={<Page />}></Route>       
      </Routes>
    </>
  );
}

export default App;
