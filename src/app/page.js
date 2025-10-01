import ChowdeckBanner from "@/components/HomePageComp/ChowdeckBanner";
import ScrollPhoneAnimation from "@/components/HomePageComp/DeckAnimation";
import FAQComponent from "@/components/HomePageComp/FAQsSection";
import Hero from "@/components/HomePageComp/HeroSection";
import InfiniteScrollCards from "@/components/HomePageComp/InfiniteScrollCards";
import JoinNetwork from "@/components/HomePageComp/NetworkSection";
import PromoSection from "@/components/HomePageComp/PromoSection";
import PromoCards from "@/components/HomePageComp/Stories";
import ThemeSlider from "@/components/HomePageComp/ThemeSlider";

export default function Page() {
    return (
        <main>
            <Hero />
            <ScrollPhoneAnimation />
            <JoinNetwork />
            <div className="bg-[#0c513f] ">
                <ThemeSlider />
                <ChowdeckBanner />
                <InfiniteScrollCards />
            </div>
            <PromoCards />
            <FAQComponent />
            <PromoSection />
        </main>
    );
}
