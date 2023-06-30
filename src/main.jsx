
import ReactDOM from 'react-dom/client';




import React from "react";
import store from "./redux/store";
import App from "./App";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render( 

<QueryClientProvider client={queryClient}>
<Provider store={store}>
  <App />
</Provider>
</QueryClientProvider>

);
