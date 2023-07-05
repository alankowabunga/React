import React ,{useState}from "react";
import {Link, useNavigate} from 'react-router-dom'
import axois from 'axios'

export const AddUser = () => {

    const navigate = useNavigate();

    // 使用 useState 儲存使用者輸入的值，初始值設定為個欄位名稱
    const [users,setUser] = useState({
        first_name:"",
        last_name:"",
        email:"",
        age:undefined
    })
    // 利用解構賦值，將各屬性取出後方便在 input 屬性中使用
    const {first_name,last_name,email,age}=users;

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        setUser({...users,[e.target.name]:e.target.value})
    }

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        await axois.post("http://localhost:8080/api/users/post",users)
        navigate("/")
    }

    return (
        <form onSubmit={(e)=>handleSubmit(e)} className="border border-3 p-3 rounded m-2">
            <div className="fs-2 mb-3 text-decoration-underline">Register Form</div>
            <div className="mb-3">
                <label htmlFor="first_name" className="form-label">First Name</label>
                <input type="text" value={first_name} name="first_name" className="form-control" id="first_name" onChange={(e)=>onInputChange(e)} />
            </div>
            <div className="mb-3">
                <label htmlFor="last_name" className="form-label">Last Name</label>
                <input type="text" value={last_name} name="last_name" className="form-control" id="last_name"  onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={email} onChange={(e)=>onInputChange(e)}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input type="number" className="form-control" id="age" name="age" value={age} onChange={(e)=>onInputChange(e)}/>
            </div>
            
            <button type="submit" className="btn btn-primary mx-2" >Submit</button>
            <Link to="/" className="btn btn-danger ms-3">Cancel</Link>
        </form>
    )
};
