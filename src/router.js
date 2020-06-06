import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import App from "./App";
import Login from "./pages/login"
import NoMatch from "./pages/404/index"
import Button from "./pages/ui/buttons.js"
import Model from "./pages/ui/models.js"
import Loading from "./pages/ui/loadings"
import Carouse from "./pages/ui/carousel"
import Gallery from "./pages/ui/gallery"
import Notice from "./pages/ui/notice"
import Logins from "./pages/form/login"
import Register from "./pages/form/register"
import Tableb from "./pages/table/basicTable"
import Tab from "./pages/ui/tabs"
import Admin from "./admin"

export default class Router extends Component {
  render() {
    return (
      <HashRouter>
        <App>
        <Route path="/login" component={Login}/>
        <Route path="/admin" render={()=>
         <Admin>
           <Route path="/admin/ui/buttons" component={Button}></Route>
           <Route path="/admin/ui/models" component={Model}></Route>
           <Route path="/admin/ui/loading" component={Loading}></Route>
           <Route path="/admin/ui/carouse" component={Carouse}></Route>
           <Route path="/admin/ui/gallery" component={Gallery}></Route>
           <Route path="/admin/ui/notice" component={Notice}></Route>
           <Route path="/admin/ui/tabs" component={Tab}></Route>
           <Route path="/admin/ui/login" component={Logins}></Route>
           <Route path="/admin/ui/register" component={Register}></Route>
           <Route path="/admin/ui/tableb" component={Tableb}></Route>
            <Route  component={NoMatch}></Route>

         </Admin>
        }></Route>
        </App>
      </HashRouter>
    );
  }
}
