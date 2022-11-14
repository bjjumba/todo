import React,{useState,useEffect} from 'react'
const initialObject={
    title:"",
    text:""
  }
  //store array of
  
const Home = () => {
    const[data,setData]=useState(initialObject)

    const{title,text}=data
    //an array to store the items from locastorage
    const store=JSON.parse(localStorage.getItem("notes"))||[]
    
//handling Onchange Function
const handleChange=(e)=>{
    setData({
        ...data,[e.target.name]:e.target.value
    })
}
//submit notes
const SubmitNote=()=>{
  store.push(data)
  localStorage.setItem("notes",JSON.stringify(store))
  console.log(store)
}
  return (
    <>
       <div>
        {JSON.stringify(data)}
          <label>Title</label>
          <input type="text" name="title" value={title} onChange={handleChange}/>
          <label>Text</label>
           <textarea 
               type="textarea" 
               name="text" 
               value={text} 
               onChange={handleChange}
               rows={5}
               columns={5}
               />
            <button onClick={SubmitNote}>Save Note</button>

        {
        store.map(({title,text})=>(
             <ul>
                 <li>
                     <h2>{title}</h2>
                 </li>
             </ul>
        ))
        }
     </div>
    </>
  )
}

export default Home