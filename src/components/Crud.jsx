import React,{ useState, useEffect } from "react";
export default Crud;



function Crud(){
   const [lastname, setLastname] = useState("");
   const [firstname, setFirstname] = useState("");
   const [purpose, setPurpose] = useState("");
   const [date, setDate] = useState("");
   const [visitors, setVisitors] = useState([

//Array of data -> Visitors//

     {
        id: 0,
        lastname:"Mejares",
        firstname:"Jaki",
        purpose: "Oversized Jacket",
        date: "01/18/2020",

     },
     {
        id: 1,
        lastname:"Batausa",
        firstname:"Aj",
        purpose: "Mini skirts",
        date: "01/01/2020",
     },
     {
        id: 2,
        lastname:"Mula",
        firstname:"Nicole",
        purpose: "Aesthetic Vibes clothes",
        date: "04/27/2020",
     },

     {
        id: 3,
        lastname:"Pelayre",
        firstname:"Jan Christian",
        purpose: "Korean pants",
        date: "03/13/2020",
     },

   ]);

 
  // For Add Button Function
   const addVisitor = () =>{
    const newVisitor = {
        lastname: lastname,
        firstname: firstname,
        purpose:purpose,
        date:date,

    };
    
    setVisitors((prev) => [...prev, newVisitor]);
  }

   //For Delete Button Function//
const handleDelete = (id ) => {
    setVisitors(visitors.filter(i => i.id !== id));
  
};

return(
    <div className="container  m-8  d-flex justify-content-between">
      
            <div className="crud">
          
                <h3 className="">Clothing Shop</h3>
            
            
                <label htmlFor="lastname">Last Name</label> <br />
                <input type="text" name="lastname" id="" required
                onChange={(e) => {
                    setLastname(e.target.value);
                }}/> <br />

                
                <label htmlFor="firstname">First Name</label><br />
                <input type="text" name="firstname" id="" required
                onChange={(e) => {
                    setFirstname(e.target.value);
                }} /> <br />


                <label htmlFor="purpose">Looking for</label><br />
                <input type="text" name="purpose" id="" required
                onChange={(e) => {
                    setPurpose(e.target.value);
                }} /> <br />


                <label htmlFor="date">Date</label><br />
                <input type="date" name="date"
                onChange={(e) => {
                    setDate(e.target.value);
                }}/> <br />
                
                <button className="btn btn-sm btn-success mt-2" onClick={addVisitor}>Search</button>
            </div>
        

                <div className="table ml-1 w-55">
                   <table className="table table-bordered text-black text-center">
                    <thead className="bg-success">
                        <th scope="col">Names</th>
                        <th scope="col">Looking</th>
                        <th scope="col">Date: Month-Day-Year</th>
                        <th scope="col">Remove</th>
                    </thead>
                       <tbody className="text-dark">
                       {visitors.map((visitor, index)=>{
                          return(
                            <tr key={index}>
                                 <td>{visitor.lastname}, {visitor.firstname}</td>
                                 <td>{visitor.purpose}</td>
                                 <td>{visitor.date}</td>
                                 <td><button  className="btn btn-sm bg-dark m-3 w-5 text-white btn-sh" onClick={() => handleDelete(visitor.id)}>&times;</button></td>
                            </tr>
                          )
                       })}
                       </tbody>

                   </table>
                </div>
    </div>
   );
}
