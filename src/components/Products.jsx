import { useParams } from "react-router-dom"
export const Product=()=>{
    const {id}=useParams();
    return(
        <div>
            <h3>Product details are: {id}</h3>
        </div>
    )
}