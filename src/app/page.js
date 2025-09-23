import ScrollPhoneAnimation from "@/components/HomePageComp/DeckAnimation";
import Hero from "@/components/HomePageComp/HeroSection";
import JoinNetwork from "@/components/HomePageComp/NetworkSection";

export default function Page() {
    return (
        <main>
            <Hero />
            <ScrollPhoneAnimation />
            <JoinNetwork />
        </main>
    );
}
