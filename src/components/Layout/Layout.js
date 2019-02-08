import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import '../../App.css';
const layout =(props)=>(
    <Aux>
        <div class="container">
        <main className={classes.Content}>
           {props.children};
        </main>
        </div>
        
    </Aux>

);
export default layout;