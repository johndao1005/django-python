import './99 - others/App.css';
import MainRouter from './00 - screens/router';

function App() {
    
    //TODO Add Token and check if token is valid 
    //TODO Check Theme and set it
    //TODO refresh token if needed
    //   // Get account details
    //   useEffect(() => {
    //     // Authentication
    //     axios.get(AppAPIList.Account)
    //         .then(response => {
    //             console.log(response)
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });
    // }, []);
  return (
    <div className="App">
      <MainRouter />
    </div>
  );
}

export default App;
