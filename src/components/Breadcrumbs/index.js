import React from 'react';
import {
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

import './Breadcrumbs.css';

const Breadcrumbs = () => (
      <nav className="breadcrumbs">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li>{` / `}</li>
            <li>Courses</li>
        </ul>
      </nav>
    );

export default Breadcrumbs;