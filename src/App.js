import React, { useReducer, useState } from 'react';
import './App.css'

import Footer from "./components/footer";
import Header from './components/header';
import Results from "./components/results";
import Form from "./components/form";
import History from "./components/history/index";
import reducer, { setData, setReqMethod, setURL, setBody, setHistory } from './reducer';
const initialState = {
  data: {},
  reqMethod: '',
  url: '',
  body: '',
  history: ''
}


export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const [data, setData] = useState({});
  // const [reqMethod, setReqMethod] = useState("");
  // const [url, setURL] = useState("");
  // const [body, setBody] = useState("");


  const callApi = async (requestParams) => {

    // mock output
    // console.log("requestParams", requestParams);
    const respons = await fetch(requestParams.url);
    //console.log(respons);
    const JsonRespons = await respons.json();
    //console.log('JsonRespons', JsonRespons);
    dispatch(setData(JsonRespons)); //setData(JsonRespons);
    dispatch(setReqMethod(requestParams.method));//setReqMethod(requestParams.method);
    dispatch(setURL(requestParams.url)); //setURL(requestParams.url);
    // console.log('body from App', requestParams.body);
    dispatch(setBody(requestParams.body));//setBody(requestParams.body)
    dispatch(setHistory(requestParams.method));//setBody(requestParams.body)

  }


  return (
    <div>
      <Header />
      <div className="req">Request Method: {state.reqMethod}</div>
      <div className="url">URL: {state.url} </div>
      <Form handleApiCall={callApi} />
      <Results data={state.data} method={state.reqMethod} body={state.body} />
      <History history={state.history} />
      <Footer />
    </div>
  )
}









//------------------------------------------------
// import React, { useState } from 'react';
// import './App.css'

// import Footer from "./components/footer";
// import Header from './components/header';
// import Results from "./components/results";
// import Form from "./components/form";

// export default function App() {

//   const [data, setData] = useState({});
//   const [reqMethod, setReqMethod] = useState("");
//   const [url, setURL] = useState("");
//   const [body, setBody] = useState("");


//   const callApi = async (requestParams) => {

//     // mock output
//     // console.log("requestParams", requestParams);
//     const respons = await fetch(requestParams.url);
//     //console.log(respons);
//     const JsonRespons = await respons.json();
//     //console.log('JsonRespons', JsonRespons);
//     setData(JsonRespons);
//     setReqMethod(requestParams.method);
//     setURL(requestParams.url);
//     // console.log('body from App', requestParams.body);
//     setBody(requestParams.body)

//   }


//   return (
//     <div>
//       <Header />
//       <div className="req">Request Method: {reqMethod}</div>
//       <div className="url">URL: {url} </div>
//       <Form handleApiCall={callApi} />
//       <Results data={data} method={reqMethod} body={body} />
//       <Footer />
//     </div>
//   )
// }











//------------------------------------------














