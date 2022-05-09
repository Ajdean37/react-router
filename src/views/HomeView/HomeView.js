import {Link, useNavigate} from 'react-router-dom'


const HomeView = () => {

  let navigate = useNavigate();

  const handleNavigateUser = () => {
    navigate('/somewhere');
  }

  return (
    <div>
      <h1>Welcome to the Home Page</h1>

      <Link to="/somewhere">Link to Somewhere</Link>

      <div>
        <button onCLick={handleNavigateUser}>This Button goes somewhere</button>
      </div>

    </div>
  );
}

export default HomeView