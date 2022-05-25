import './App.css';
import {useState} from "react";

function App() {
    const [username, setUsername] = useState('')
    const [useremail, setUseremail] = useState('')
    const [userpass, setUserpass] = useState('')
    const [usercheck, setUsercheck] = useState(false)

    const [error, setError] = useState({
        username: true,
        useremail: true,
        userpass: true,
        usercheck: true,

    })


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

    const formValidate = () => {
        let name = false;
        let email = false;
        let pass = false;
        let check = false;
        let correct = false;

        if(username.length > 10 && username.indexOf(' ') === -1) {
            name = true;
        }

        if(useremail.indexOf('@') !== -1) {
            email = true;
        }

        if(userpass.length >= 10) {
            pass = true;
        }

        if(usercheck) {
            check = true;
        }

        if(name && email && pass && check) {
            correct = true;
        }

        return ({
            name,
            email,
            pass,
            check,
            correct
        })
    }

    const handleForm = e => {
        e.preventDefault();

        const validate = formValidate()

        console.log(validate)

        if(validate.correct) {
            setUsername('');
            setUseremail('');
            setUserpass('');
            setUsercheck(false)

            setError({
                username: false,
                useremail: false,
                userpass: false,
                usercheck: false,
            })

            console.log("Wiadomośc wysłana")
        } else {
            setError({
                username: !validate.name,
                useremail: !validate.email,
                userpass: !validate.pass,
                usercheck: !validate.check
            })
        }
    }

    return (
        <div className="App">
            <form onSubmit={handleForm} noValidate>
                <label htmlFor="user">
                    <p>Twoje imię:</p>
                    <input type="text" id="user" name="username" value={username} onChange={handleChange}/>
                    {error.username && <span>Nazwa uzytkownika musi miec conajmniej 10 znaków</span>}
                </label>
                <label htmlFor="email">
                    <p>Email:</p>
                    <input type="email" id="email" name="useremail" value={useremail} onChange={handleChange}/>
                    {error.useremail && <span>Email musi zawierać małpkę ( @ )</span>}
                </label>
                <label htmlFor="password">
                    <p>Hasło:</p>
                    <input type="password" id="password" name="userpass" value={userpass} onChange={handleChange}/>
                    {error.userpass && <span>Hasło musi składać się z conajmniej 8 znaków</span>}
                </label>
                <label htmlFor="check">
                    <input type="checkbox" id="check" name="usercheck" checked={usercheck} onChange={handleChange}/>
                    Akceptuję warunki
                </label>
                {error.usercheck && <span>Wymagana jest akceptacja warunków</span>}
                <button type="submit">Zapisz się!</button>
            </form>
        </div>
    );
}

export default App;
