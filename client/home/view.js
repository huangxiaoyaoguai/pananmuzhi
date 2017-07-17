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
                <img src="http://huchsite.oss-cn-shanghai.aliyuncs.com/muzhi/WechatIMG304.jpg"/>
                <img src="http://huchsite.oss-cn-shanghai.aliyuncs.com/muzhi/WechatIMG306.jpg" />
                <img src="http://huchsite.oss-cn-shanghai.aliyuncs.com/muzhi/WechatIMG306.jpg" />
                <img src="http://huchsite.oss-cn-shanghai.aliyuncs.com/muzhi/WechatIMG308.jpg" />
                <img src="http://huchsite.oss-cn-shanghai.aliyuncs.com/muzhi/WechatIMG309.jpg" />
                <img src="http://huchsite.oss-cn-shanghai.aliyuncs.com/muzhi/WechatIMG310.jpg" />
                <img src="http://huchsite.oss-cn-shanghai.aliyuncs.com/muzhi/WechatIMG311.jpg" />
                <img src="" />
                
            	
			</div>

        )
    }
}

module.exports = HomeView
