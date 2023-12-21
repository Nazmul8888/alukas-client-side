import Collection from "../HomeSection/Collection/Collection";
import CustomerReview from "../HomeSection/CustomerReview/CustomerReview";
import Popular from "../HomeSection/Popular/Popular";
import Review from "../HomeSection/Review/Review";
// import MegaSection from "../MegaSection/MegaSection";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Popular></Popular>
         {/* <MegaSection></MegaSection> */}
         <Review></Review>
         <Collection></Collection>
         <CustomerReview></CustomerReview>
       
        
        </div>
    );
};

export default Home;