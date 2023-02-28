import 'react-calendar/dist/Calendar.css';
import "flowbite";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import "./index.css";
import store from "./Store";
import 'react-phone-number-input/style.css'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
 
const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById("root"));
//  const persistor =
let persistor = persistStore(store);
root.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
      
          <App />
       
        </PersistGate>
      </BrowserRouter>
    </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
