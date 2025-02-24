import React from "react";

export default function Users() {
 
  return (
    <>
    
     
        <div className="users">
          <h3 className="">Skrive med folk fra skolen</h3>
          <div className="users__list">
            <img src="/imgs/akki.jpg" alt="" className="users__img" />
            <div className="users__details">
              <h4 className="heading-4 heading-4--light">Akki</h4>
              <h5 className="users__studie">
                <p className="studieretning-color">Studie retning</p>
                Computer Science(Prog)
              </h5>
            </div>

            <img src="/imgs/viktor.png" alt="" className="users__img" />
            <div className="users__details">
              <h4 className="heading-4 heading-4--light">Vcitor</h4>
              <h5 className="users__studie">
                <p className="studieretning-color">Studie retning</p>
                Computer Science(Prog)
              </h5>
            </div>

            <img src="/imgs/Jones.png" alt="" className="users__img" />
            <div className="users__details">
              <h4 className="heading-4 heading-4--light">Jones </h4>
              <h5 className="users__sold">
                <p className="studieretning-color">Studie retning</p>
                Computer Science(Prog)
              </h5>
            </div>
          </div>
        </div>
      
      
    </>
  );
}
