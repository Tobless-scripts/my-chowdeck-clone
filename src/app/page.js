import ScrollPhoneAnimation from "@/components/HomePageComp/DeckAnimation";
import Hero from "@/components/HomePageComp/HeroSection";
import JoinNetwork from "@/components/HomePageComp/NetworkSection";
import PromoCards from "@/components/HomePageComp/Stories";
import ThemeSlider from "@/components/HomePageComp/ThemeSlider";

export default function Page() {
    return (
        <main>
            <Hero />
            <ScrollPhoneAnimation />
            <JoinNetwork />
            <ThemeSlider />
            <PromoCards />
        </main>
    );
}
