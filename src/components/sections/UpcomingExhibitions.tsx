import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@src/components/ui/card";
import { Button } from "@src/components/ui/button";
import Link from "next/link";

export function UpcomingExhibitions() {
  const exhibitions = [
    {
      title: "Chromatic Resonance",
      location: "Modern Art Gallery, Barcelona",
      date: "October 15-30, 2023",
      description: "A solo exhibition featuring new works exploring the relationship between color and emotion.",
      image: "https://images.unsplash.com/photo-1594784154516-e21ae1c68604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      attribution: "https://unsplash.com/photos/white-concrete-building-interior-9XngoIpxcEo"
    },
    {
      title: "Abstract Dialogues",
      location: "Contemporary Art Space, Paris",
      date: "November 5-20, 2023",
      description: "A group exhibition with five international abstract artists exploring new perspectives in contemporary art.",
      image: "https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      attribution: "https://unsplash.com/photos/people-inside-building-PGdW_bHDbpI"
    },
    {
      title: "Color & Form Festival",
      location: "International Arts Center, Berlin",
      date: "January 10-30, 2024",
      description: "An annual celebration of abstract art featuring workshops, talks, and exhibitions from renowned artists.",
      image: "https://images.unsplash.com/photo-1585508548697-06c45d33cff5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      attribution: "https://unsplash.com/photos/white-and-brown-concrete-building-98Eeki_yvT4"
    }
  ];

  return (
   <section data-editor-tag="G0vnkbxfTp"  id="exhibitions" className="py-24 bg-background/50">
     <div data-editor-tag="kuZJMDnthV"  className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
       <div data-editor-tag="tVy5HkGypF"  className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
         <div data-editor-tag="V6XeBJgoRv"  className="space-y-2">
           <div data-editor-tag="uf5R0Ko22H"  className="inline-block rounded-lg bg-foreground/10 px-3 py-1 text-sm">
              What's Next
            </div>
           <h2 data-editor-tag="HADobkAMOw"  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Upcoming Exhibitions
            </h2>
           <p data-editor-tag="NnHA620Pzh"  className="mx-auto max-w-[700px] text-foreground/70 md:text-xl">
              Join me at these upcoming exhibitions and events where you can experience my work in person and connect with the art community.
            </p>
          </div>
        </div>
        
       <div data-editor-tag="v5zkWTUi91"  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exhibitions.map((exhibition, index) => (
           <Card data-editor-tag="qmq1mPNcYO"  key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg border-0">
             <div data-editor-tag="Qv2QmzjHD6"  className="relative h-48 w-full overflow-hidden">
               <img data-editor-tag="oqJQzJDkCd"  
                  src={exhibition.image} 
                  alt={exhibition.title} 
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* Attribution comment for Unsplash image */}
                {/* Image from Unsplash: {exhibition.attribution} */}
              </div>
             <CardHeader data-editor-tag="vThs5IP0eA" >
               <CardTitle data-editor-tag="RSxHC8ZH55" >{exhibition.title}</CardTitle>
               <CardDescription data-editor-tag="D6sszKjoOp"  className="text-foreground/70">
                  {exhibition.location} • {exhibition.date}
                </CardDescription>
              </CardHeader>
             <CardContent data-editor-tag="1YeEPnAUQ7" >
               <p data-editor-tag="DIC5fq1zYw"  className="text-foreground/80 mb-4">{exhibition.description}</p>
               <Button data-editor-tag="G62VOKFCIV"  asChild variant="outline" className="w-full">
                 <Link data-editor-tag="ZMGykCDFk5"  href="#event-details">Event Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
       <div data-editor-tag="8Lju8cEuOj"  className="mt-12 text-center">
         <p data-editor-tag="x8UdRyW7q1"  className="text-foreground/70 mb-4">
            Looking to host an exhibition or interested in collaboration opportunities?
          </p>
         <Button data-editor-tag="BHINaKpo0E"  asChild>
           <Link data-editor-tag="yUWKTZuc9H"  href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}