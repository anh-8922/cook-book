import Navigator from "./Components/Navigator";
import Footer from "./Components/Footer";
import './Styles/layout.css';

export default function Layout({children}) {
    return(
        <div className="mainbody">
            <Navigator/>
            <div style={{backgroundColor: 'pink', height: 'max-content'}}> 
                {children}
            </div>
            <Footer/>
        </div>
    )
}