import '../css/Footer.css'
import '../scripts/load-cat'
import octocatLogo from '../assets/github-mark-white.svg'

function App() {
    return (
        <footer>
            <a id="octocat-carrier" target="_blank" href="https://github.com/Eyrim">
                <img src={octocatLogo} alt="" />
            </a>
            <div id="cat-carrier"></div>
        </footer>
    )
}

export default App
