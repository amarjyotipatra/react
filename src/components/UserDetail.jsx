import { useParams } from "react-router-dom";

export const UserDetail=()=>{
    const {userid}=useParams();
    return <div><h6>Fetch user details of:{userid}</h6></div>
}