import React from "react"
import clsx from 'clsx'
import style from './Category.module.css'

class ItemCategory extends React.Component {
    render() { 
    return <li className={clsx({[style.box] : this.props.data.status})} onClick={this.props.handleClick}>{this.props.data.name}</li>;
    }
}
 
export default ItemCategory;