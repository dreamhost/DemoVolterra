import { Header } from "@src/components/layout/Header";
import { Footer } from "@src/components/layout/Footer";
import { ArtistHero } from "@src/components/sections/ArtistHero";
import { Gallery } from "@src/components/sections/Gallery";
import { ArtistStory } from "@src/components/sections/ArtistStory";
import { UpcomingExhibitions } from "@src/components/sections/UpcomingExhibitions";
import { ArtistContact } from "@src/components/sections/ArtistContact";

export default function Home() {
  return (
   <div data-editor-tag="Sii1IOOwUi"  className="flex min-h-screen flex-col">
     <Header data-editor-tag="qRojezyWYG"  />
     <main data-editor-tag="bxGYQbPrU2"  className="flex-1">
       <ArtistHero data-editor-tag="x7jFUkLghy"  />
       <Gallery data-editor-tag="ytsORvSXjy"  />
       <ArtistStory data-editor-tag="RiQYYFPoV8"  />
       <UpcomingExhibitions data-editor-tag="afv5h772cV"  />
       <ArtistContact data-editor-tag="dmwWqGmUFr"  />
      </main>
     <Footer data-editor-tag="Gjf8eCjDb1"  />
    </div>
  );
}