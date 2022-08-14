import React, { useState } from 'react';
import './App.css'

import Footer from "./components/footer";
import Header from './components/header';
import Results from "./components/results";
import Form from "./components/form";



export default function App() {

  const [data, setData] = useState({});
  const [reqMethod, setReqMethod] = useState("");
  const [url, setURL] = useState("");
  const [body, setBody] = useState("");


  const callApi = async (requestParams) => {

    // mock output
    // console.log("requestParams", requestParams);
    const respons = await fetch(requestParams.url);
    //console.log(respons);
    const JsonRespons = await respons.json();
    //console.log('JsonRespons', JsonRespons);
    setData(JsonRespons);
    setReqMethod(requestParams.method);
    setURL(requestParams.url);
    // console.log('body from App', requestParams.body);
    setBody(requestParams.body)

  }


  return (
    <div>
      <Header />
      <div>Request Method: {reqMethod}</div>
      <div>URL: {url} </div>
      <Form handleApiCall={callApi} />
      <Results data={data} method={reqMethod} body={body} />
      <Footer />
    </div>
  )
}
























//-----------------
// import './App.css'
// import React from "react";
// import Footer from "./components/footer";
// import Header from './components/header';
// import Results from "./components/results";
// import Form from "./components/form";
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: null,
//       requestParams: {},
//     };
//   }

// callApi = (requestParams) => {
//   // mock output
//   const data = {
//     count: 2,
//     results: [
//       { name: 'fake thing 1', url: 'http://fakethings.com/1' },
//       { name: 'fake thing 2', url: 'http://fakethings.com/2' },
//     ],
//   };
//   this.setState({ data, requestParams });
// }


//   render() {
//     return (
//       <>
//         <Header />
//         <div>Request Method: {this.state.requestParams.method}</div>
//         <div>URL: {this.state.requestParams.url}</div>
//         <Form handleApiCall={this.callApi} />
//         <Results data={this.state.data} />
//         <Footer />
//       </>

//     )
//   }
// }
// export default App;

//---------------------------------------------------------------



