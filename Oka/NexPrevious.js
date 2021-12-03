import React from "react";

const Pagination = ({onPrev, onNext,next,prev})=>{
    const handelPrev=()=>{
        onPrev()
    }
    const handleNext=()=>{
        onNext()
    }
    return(
        <div>

            <div>
                {
                    prev ?
                    (<button onClick= {handelPrev}>Anterior</button>)
                    :null
                }
                {
                    next ?
                    (<button onClick={handleNext}>Siguiente</button>)
                    :null
                }
            </div>

        </div>
    )
}
export default Pagination