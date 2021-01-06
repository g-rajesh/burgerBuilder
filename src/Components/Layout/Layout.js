import React,{Component} from 'react';

import Aux from '../../HOC/Auxilliary';
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{

  state = {
    showSideDrawer : false
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer:false});
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer:!prevState.showSideDrawer};
    });
  }

  render(){
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer 
        closed={this.sideDrawerClosedHandler} 
        open={this.state.showSideDrawer} />
        <main className={styles.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;