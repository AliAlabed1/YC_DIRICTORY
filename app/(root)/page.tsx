import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUP_QUIRY } from "@/sanity/lib/quiries";

export default async function Home({searchParams}:{searchParams:Promise<{query?:string}>}) {
  const query = (await searchParams).query
  const posts =await client.fetch(STARTUP_QUIRY)
  
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup <br /> Connect with Ent repreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and git noticed in virtual Competitions.
        </p>
        <SearchForm query={query}/>
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query?`Search results for "${query}"`:"All Startups"}
        </p>
        <ul className="mt-7  card_grid">
          {
            posts?.length>0 && posts.map((post:StartupCardType,index:number)=>(
              <StartupCard key={post._id} post ={post}/>
            ))
          }
        </ul>
      </section>
      
    </>
  );
}
