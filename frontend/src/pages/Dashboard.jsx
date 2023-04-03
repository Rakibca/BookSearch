import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import BookForm from "../components/BookForm";
// import BookItem from "../components/BookItem";
// import Spinner from "../components/Spinner";
//import { getGoals, reset } from "../features/goals/goalSlice";

function Dashboard() {
  const navigate = useNavigate();
  //const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  // const { goals, isLoading, isError, message } = useSelector(
  //   (state) => state.goals
  // );

  useEffect(() => {


    if (!user) {
      navigate("/login");
    }


  }, [user, navigate]);



  return (
    <>
    <section className='heading'>
      <h1>Welcome {user && user.name}</h1>
      <p>Books Dashboard</p>
    </section>

    <BookForm />
    </>
  );
}

export default Dashboard;