import React from 'react'
import Movies from '../Data'
import "./Contact.css";

const Contact = () => {
   return (
      <>
         <h1 className='text-center mt-5 font-weight-bold' style={{fontSize:'45px',color:'green'}}>ALL 2022 MOVIES</h1>
         <div className='container'>
            <div className='row'>
               {
                  Movies.map((cval) => {
                     return (
                        <>
                           <div className='col-md-4'>
                              <div class="card" style={{width:'18rem',marginTop:'2rem'}}>
                                 <img src={cval.cover} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                       <h5 class="card-title" style={{fontSize:'35px',textAlign:'center'}}>{cval.movieName}</h5>
                                       <p class="card-text"  style={{fontSize:'25px',textAlign:'center'}}>Releseing On {cval.releseDate} SEP</p>
                                       <br/>
                                       <a href="#" className="btn btn-primary"  style={{fontSize:'25px',textAlign:'center'}}>{cval.rating}*IMBD</a>
                                    </div>
                              </div>
                           </div>
                        </>
                       
                     );

                  })
               }
                <button className='text-center mt-5 font-weight-bold' style={{fontSize:'50px',backgroundColor:'blue'}}>Click Here To DOWNLOAD</button>
            </div>

         </div>


      </>

   );
};

export default Contact;

