import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

    <h1>Dashboard</h1>
    const navigate = useNavigate(); const handleGoBack = () => { navigate(-1) }
    const handleGotoLogin = () => { navigate("/login") }
    return (
        <>
            <div>
                <button onClick={handleGoBack}>Go back</button>
                <button onClick={handleGotoLogin}>Goto Login page</button>
            </div>
        </>
    )
};
export default Dashboard;
