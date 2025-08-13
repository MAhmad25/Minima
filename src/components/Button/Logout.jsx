import { useDispatch } from "react-redux";
import appAuth from "../../app/AuthService";
import { logout } from "../../store/reducers/authSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Loader } from "../index";
import { removePosts } from "../../store/reducers/postsSlice";
const Logout = () => {
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const [loader, setLoader] = useState(false);
      const handleLogout = () => {
            setLoader(true);
            appAuth.Logout().then(() => {
                  dispatch(removePosts());
                  dispatch(logout());
                  setLoader(false);
                  navigate("/");
            });
      };
      return (
            <button disabled={loader} onClick={handleLogout} className="px-4 flex justify-center items-center cursor-pointer py-2 text-sm tracking-tight leading-none bg-[var(--color-bl)] text-[var(--color-wht)] rounded-full">
                  {loader ? <Loader /> : "Logout"}
            </button>
      );
};

export default Logout;
