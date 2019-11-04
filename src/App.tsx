import React from 'react';
import {
    HashRouter,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import { ArticlePage } from "./components/pages/ArticlePage";
import { ArticlesPage } from "./components/pages/ArticlesPage";


export const App: React.FC = () => {
    return (
        <HashRouter>
            <Switch>

                <Route path="/articles/:articleId" component={ArticlePage} />

                <Route path="/articles" component={ArticlesPage}/>

                <Redirect from="/" to="/articles/fa9519d5-0363-4b8d-8e1f-627d802c08a8"/>

            </Switch>
        </HashRouter>
    );
};
