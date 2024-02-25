import React from "react";
import { Route, Routes } from "react-router-dom";
import RegisterLoginComponent from './RegisterLoginComponent'
import '../sass/_homeScreen.scss';

const HomeScreen = () => {

    return (
        <div className="homeScreen">
                {/* Add Navbar here */}
            <div className="container">
                
                <React.Suspense fallback = "Loading" >
                    <Routes>
                        <Route exact path="/" element={ <RegisterLoginComponent /> }></Route>
                        {/* <Route path="/search-result/:citySearch/:addressSearch" element={<SearchResult/>}></Route> */}
                        {/* <Route path="/search-result" element={<SearchResult/>}></Route>
                        <Route path="/postAd" element={<LazyPostAd/>}></Route>
                        <Route path="/postad-for-self" element={<PostAdForSelf/>}></Route>
                        <Route path="/viewPost/:flatId" element={<ViewPost/>}></Route>
                        <Route path="/view-post-for-flat-requirement/:adId" element={<ViewPostForFlatRequirement/>}></Route>
                        <Route path="/view-more/:adsFor" element={<ShowMore/>}></Route>
                        <Route path="/user-profile" element={<Profile/>}></Route>
                        <Route path="/about-us" element={<AboutUs/>}></Route>
                        <Route path="/terms-and-condition" element={<TermsAndCondition/>}></Route>
                        <Route path="/privacy-policy" element={<PrivacyPolicy/>}></Route>
                        <Route path='/*' element={<NotFoundPage/>}></Route> */}
                    </Routes>
                </React.Suspense>
            </div>
        </div>
    )
}

export default HomeScreen;