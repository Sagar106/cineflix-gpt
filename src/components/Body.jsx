import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "../pages/Login/Login";
import Browse from "../pages/Browse/Browse";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";
import { auth } from "../configs/firebase";

const Body = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        const { uid, email, displayName } = user
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
        navigate("/browse")
      } else {
        dispatch(removeUser)
        navigate("/")
      }
    })

    return () => unsubscribe()
  }, [])

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </div>
  );
};

export default Body;
