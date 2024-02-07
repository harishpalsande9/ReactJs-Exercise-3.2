// App.js
import React, { Suspense, lazy, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Loading from './components/Loading';
const LazyAddressForm = lazy(() => import("./components/AddressForm"))
const LazyAddressList = lazy(() => import("./components/AddressList"))

const App = () => {
  const [data, setData] = useState([])
  const handleWorkAddressSubmit = (ele) => {
    setData([...data, ele])
  };

  return (
    <Suspense fallback={<Loading />}>
      <LazyAddressForm onSubmit={handleWorkAddressSubmit} />
      <LazyAddressList data={data} />
    </Suspense>
  );
};

export default App;
