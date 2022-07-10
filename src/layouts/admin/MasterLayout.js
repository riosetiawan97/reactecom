import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts';
import 'https://use.fontawesome.com/releases/v6.1.0/js/all.js';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js';

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

import routes from '../../routes/routes';

const MasterLayout = () => {
    return (
        <div className="sb-nav-fixed">
            <Navbar/>            
            <div id="layoutSidenav">
                
                <div id="layoutSidenav_nav">
                    <Sidebar/>
                </div>
                
                <div id="layoutSidenav_content">
                    <main>
                        <Switch>
                            {routes.map((route, idx) => {
                                return(
                                    route.component && (
                                        <Route
                                            key={idx}
                                            path={route.path}
                                            exact={route.exact}
                                            name={route.name}
                                            render={(props) =>(
                                                <route.component {...props}/>
                                            )}
                                        />
                                    )
                                )
                            })}
                            <Redirect from="/admin" to="/admin/dashboard" />
                        </Switch>
                    </main>
                        <Footer/>

                </div>

            </div>
        </div>
    );
}

export default MasterLayout;