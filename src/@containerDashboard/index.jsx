
import Body from "../@components/body";
import Footer from "../@components/footer";
import Header from "../@components/header";

const ContainerDashboard = ({ childern }) => {
    return (
        <div className="container-dashboard" style={{ padding: '0px' }} id="dashboard">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}
export default ContainerDashboard;