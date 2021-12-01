import React from "react";

function fichaPersonajes(props) {
  console.log(props.fichas);

  return (
    <React.Fragment>
      <div className="jumbottron">
        <h1>ficha</h1>
      </div>
      <div className="container">
        <div className="row">
          {props.fichas.map((item, i) => (
            <div key={i} className="col-sm-4">
              <div className="card mb.3">
                <div className="card-header">
                    <strong> { item.name } </strong>
                </div>
                <div className="card-body text-center">
                  <img className="img-fluid" src={item.image} alt={item.name} />
                </div>
                <div className ="card-footer">
                    {item.info}
                </div>
              </div>
            </div>
          ))
        }
        </div>
      </div>
    </React.Fragment>
  );
}

export default fichaPersonajes;
