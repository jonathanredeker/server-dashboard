import { Col, Container, Row } from 'react-bootstrap'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Components/Header'
import Navigation from './Components/Navigation'
import NodeDashboard from './Views/NodeDashboard'
import NodeDetails from './Views/NodeDetails'

function App() {

    return (

        <BrowserRouter>

            <div className="container-fluid p-0 pb-5">
                <Navigation />
                <Switch>
                    <Route exact path="/">
                        <NodeDashboard />
                    </Route>
                    <Route exact path="/node/:id">
                        <NodeDetails />
                    </Route>
                    <Route exact path="/:page">
                        <NodeDashboard />
                    </Route>
                    <Route exact path="/:page/:limit">
                        <NodeDashboard />
                    </Route>
                </Switch>
            </div>


        </BrowserRouter>

    )
    
}

export default App;
