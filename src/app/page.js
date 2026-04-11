import Banner from "@/components/homePage/Banner";
import Stats from "@/components/homePage/Stats";
import TrendingApps from "@/components/homePage/TrendingApps";


export default function Home() {
  return (
    <div>
       <Banner></Banner>
       <Stats></Stats>
       <TrendingApps from='homepage' ></TrendingApps>
    </div>
  );
}
