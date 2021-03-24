import React,{useState} from "react";

let userContext=React.createContext();   //creating a layer using context for accessing data
export default userContext;


export const UserProvider=({children})=>{  
    //setting value here using userprovider 
    //children is not a param its obj
    //uppercamel case important for provider
    let [userList,setUserList]=useState([]);
    return <userContext.Provider value={{userName:"sowmya",userList,setUserList}}>
        {children}
    </userContext.Provider>


}
//Sending data from layer to child components
//1.create context
//2.providing data
//3.wrapping provider in common place so that children can use it(app.js)
//4.access or modify data using useContext hook and give our custom context as parameter

//sending data from child component to layer
//5.create usestate and pass this into the object that we are passing from the layer ==>so that i can modify my array at anytime
//6.modify array if need 
//7.display it using use state