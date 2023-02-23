import './App.css';
import React, { useState, useEffect } from 'react';
import TreeView from '@material-ui/lab/TreeView';  
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';  
import ChevronRightIcon from '@material-ui/icons/ChevronRight';  
import TreeItem from '@material-ui/lab/TreeItem';  
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/Navbar';
import { Route, Routes ,Router} from "react-router-dom"
import DevX from './pages/devX';
import Delivery from './pages/Delivery';
import Platform_Services from './pages/Platform_Services';
import Side_navbar from './components/side_navbar';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '20%',
    height: '50%',
    overflowX: 'auto',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));


const Main = () => {
  const classes = useStyles();
  const [manager, setManager] = useState({});
  const [selectedEmployee,setselectedEmployee] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:8000');
      const data = await response.json();
      setManager(data);
    }
    fetchData();
  }, []);




  const header=() => (
    <div class="header">
      <h1>Nirvana</h1>
    </div>

  );

  return (
    <>
      { header()}
      <Navbar manager={manager}/>
      <Routes>
          <Route path="/devX" element={<DevX />} />
          <Route path="/Delivery" element={<Delivery />} />
          <Route path="/Platform_Services" element={<Platform_Services />} />       
      </Routes> 
  </>
  );
};

export default Main;