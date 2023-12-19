import Popular from "../HomeSection/Popular/Popular";
import Review from "../HomeSection/Review/Review";
import MegaSection from "../MegaSection/MegaSection";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Popular></Popular>
         <MegaSection></MegaSection>
         <div>
         <Review></Review>
         </div>
        </div>
    );
};

export default Home;