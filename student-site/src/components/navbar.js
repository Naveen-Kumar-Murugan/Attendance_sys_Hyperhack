import React from "react";
import {auth} from "../config"
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function NavBar(){
    const navigate = useNavigate();
    let uid = auth.currentUser.uid;
    onAuthStateChanged(auth, (user)=>{
        if(user){
            uid = auth.currentUser.uid; 
        }
        else{
            uid=" ";
        }
    });
    const eventHandler = async(e) =>{
        await auth.signOut();
        navigate("/")
    }

    return(
        <div className="flex justify-between py-5 px-3 border-4 ">
            <div>
                Attendance
            </div>
            <div>
                <ul className="flex">
                    <li>Dashboard</li>
                    <li>Classes</li>
                    <li><button className="border-2" onClick={eventHandler}>Logout</button></li>
                </ul>
            </div>
        </div>
    )
}