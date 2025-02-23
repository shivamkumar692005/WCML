import React, { Suspense, lazy } from 'react';
import './App.css';
import SkeletonAuth from './components/Auth/SkeletonAuth';


const Auth = lazy(() => import('./pages/Auth'));

function App() {
  return (
    <Suspense fallback={<SkeletonAuth />}>
      <Auth />
    </Suspense>
  );
}

export default App;