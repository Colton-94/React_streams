import React from 'react';
import {Router, Route,Switch} from 'react-router-dom';

import StreamCreate from './streams/StreamCreate';
import StreamDel from './streams/StreamDel';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header'; 
import history from '../history';


const App=()=>{
    return(
        <div className="ui container">
        <Router history={history} >
        <div>
           
            <Header />
            <Switch>
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/forms/:id" exact component={StreamEdit} />
                <Route path="/streams/delete/:id" exact component={StreamDel} />
                <Route path="/streams/:id"   exact component={StreamShow} />
                <Route path="/" exact component={StreamList} />
                </Switch>
        </div>

        
        </Router>
        </div>
         /*<div>
             <BrowserRouter>
             <div>
                // />
                <Route path="/streams/new" exact component={StreamCreate} />
                <Route path="/streams/edit" exact component={StreamEdit} />
                <Route path="/streams/delete" exact component={StreamDel} />
                <Route path="/streams/show" exact component={StreamShow} />
             </div>

             </BrowserRouter>
         </div>*/
         );
};

export default App;
