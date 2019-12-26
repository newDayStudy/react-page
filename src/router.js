
import React from 'react'
import {HashRouter, Route, Switch, Redirect } from  'react-router-dom'
import App from './App'
import Admin from  './admin/'
import Login from './login/'
import Buttons from './ui/buttons/'
import Loadings from './ui/loadings/'
import Icons from './ui/icons'
import Typographys from './ui/typographys/'
import Grids from './ui/grids/'
import Layouts from './ui/layouts/'
import NoMatch from './nomatch/'
function Router() {
    return (
        <HashRouter>
            <App>
                <Route exact path='/'>
                    <Redirect to='/admin/ui/buttons' />
                ></Route>
                <Route path='/login' component={Login}/>
                <Route path='/admin' render={()=>
                    <Admin>
                        <Switch>
                            <Route path='/admin/ui/buttons' component={Buttons}/>
                            <Route path='/admin/ui/loadings' component={Loadings}/>
                            <Route path='/admin/ui/icons' component={Icons}/>
                            <Route path='/admin/ui/typographys' component={Typographys}/>
                            <Route path='/admin/ui/grids' component={Grids}/>
                            <Route path='/admin/ui/layouts' component={Layouts}/>
                            <Route component={NoMatch}/>
                        </Switch>
                    </Admin>
                }/>
            </App>
        </HashRouter>
    )
}
export  default Router