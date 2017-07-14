import React, { Component } from 'react'
import {Link} from 'react-router'

import './index.less';



class HomeView extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[],
        }
    }
	componentDidMount(){
       
	}
    
    render() {
        return (
            <div className="main">
                磐安木制品厂
            	
			</div>

        )
    }
}

module.exports = HomeView
