import './App.css';
import {useState} from "react";

function App() {
    const [username, setUsername] = useState('')
    const [useremail, setUseremail] = useState('')
    const [userpass, setUserpass] = useState('')
    const [usercheck, setUsercheck] = useState(false)

    const handleChange = e => {

        switch (e.target.name) {
            case "username":
                setUsername(e.target.value);
                break;
            case "useremail":
                setUseremail(e.target.value);
                break;
            case "userpass":
                setUserpass(e.target.value);
                break;
            case "usercheck":
                setUsercheck(e.target.checked);
                break;
            default:
                console.log("Brak takiej wartości")
        }
    }

    const handleForm = e => {
        e.preventDefault();
    }

    return (
        <div className="App">
            <form onSubmit={handleForm} noValidate>
                <label htmlFor="user">
                    <p>Twoje imię:</p>
                    <input type="text" id="user" name="username" value={username} onChange={handleChange}/>
                </label>
                <label htmlFor="email">
                    <p>Email:</p>
                    <input type="email" id="email" name="useremail" value={useremail} onChange={handleChange}/>
                </label>
                <label htmlFor="password">
                    <p>Hasło:</p>
                    <input type="password" id="password" name="userpass" value={userpass} onChange={handleChange}/>
                </label>
                <label htmlFor="check">
                    <input type="checkbox" id="check" name="usercheck" checked={usercheck} onChange={handleChange}/>
                    Akceptuję warunki
                </label>
                <button type="submit">Zapisz się!</button>
            </form>
        </div>
    );
}

export default App;
