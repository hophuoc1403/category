import React from "react"
import ItemCategory from "./ItemCategory";

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            category:[
                {id:"1",name:"abcdxyz",status:false},
                {id:"2",name:"emi Fukada",status:false},
                {id:"3",name:"mayumi",status:false},
                {id:"4",name:"aksdjklas",status:false},
                {id:"5",name:"dk;dks",status:false},
                {id:"6",name:"sfkdds",status:false},
                {id:"7",name:"abcdxyz",status:false},
                {id:"8",name:"abcdxyz",status:false},
                {id:"9",name:"abcdxyz",status:false},
                {id:"10",name:"abcdxyz",status:false},
                {id:"11",name:"abcdxyz",status:false},
                {id:"12",name:"abcdxyz",status:false},
                {id:"13",name:"abcdxyz",status:false},
                {id:"14",name:"abcdxyz",status:false},
                {id:"15",name:"abcdxyz",status:false},
            ]
         }
    }
    Active(index){
       let  _newArr = this.state.category
        _newArr.map((index)=> index.status = false)
        _newArr[index].status =  !_newArr[index].status
        this.setState(_newArr)
        
    }

    render() { 
        return ( 
            <div>
            <ul>
                {this.state.category.map((item,index) =>{
                    return <ItemCategory key={index} handleClick={e => this.Active(index,e)} data={item}/>
                })}
                </ul>                
            </div>
         );
    }
}
 
export default Category;