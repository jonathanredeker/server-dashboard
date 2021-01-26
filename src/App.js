import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NodeDashboard from './Views/NodeDashboard'
import NodeDetails from './Views/NodeDetails'

function App() {

    return (

        <div>

            <BrowserRouter>

                <Switch>
                    <Route exact path="/">
                        <NodeDashboard />
                    </Route>
                    <Route exact path="/:page">
                        <NodeDashboard />
                    </Route>
                    <Route path="/:page/:limit">
                        <NodeDashboard />
                    </Route>
                    <Route exact path="/node">
                        <NodeDashboard />
                    </Route>
                    <Route exact path="/node/:id">
                        <NodeDetails />
                    </Route>
                </Switch>

            </BrowserRouter>

        </div>

    )
    
}

export default App;
