import React,{useState,useEffect} from 'react';
import Amplify,{API,graphqlOperation} from 'aws-amplify'
import awsconfi from './aws-exports';
import {listProjectPros} from './graphql/queries'
import Home from './pages/Home'
import Header from './compo/Header'
import Footer from './compo/Footer'
import './App.css';

Amplify.configure(awsconfi)

function App() {
  const [product,setproduct] = useState([])


  useEffect(()=>{
    getProduct()
  },[])
  

  const getProduct = async () =>{
    try {
      const dataList = await API.graphql(graphqlOperation(listProjectPros))
      const listPro = dataList.data.listProjectPros.items
      setproduct(listPro)
      
      
    } catch (error) {
      
    }
  }
  

  return (
    <div className="App">
      <Header/>
      <Home
      product={product}
      />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
