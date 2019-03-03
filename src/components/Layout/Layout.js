import React from 'react';
import classes from './Layout.css';
import '../../App.css';
const layout =(props)=>(
        <div class="container">
        <main className={classes.Content}>
           {props.children};
        </main>
        </div>
);
export default layout;
