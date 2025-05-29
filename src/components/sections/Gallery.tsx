import { Card, CardContent } from "@src/components/ui/card";
import { Button } from "@src/components/ui/button";
import Link from "next/link";

export function Gallery() {
  // Gallery items with titles, descriptions, and images
  const artworks = [
    {
      title: "Chromatic Symphony",
      description: "Acrylic on canvas, 36″ × 48″",
      image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2066&q=80",
      attribution: "https://unsplash.com/photos/colorful-abstract-painting-hCb3lIB8L8E"
    },
    {
      title: "Emotional Cascade",
      description: "Oil on canvas, 30″ × 40″",
      image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
      attribution: "https://unsplash.com/photos/blue-red-and-yellow-abstract-painting-nuRYwOJryyk"
    },
    {
      title: "Urban Reflections",
      description: "Mixed media on canvas, 24″ × 36″",
      image: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      attribution: "https://unsplash.com/photos/green-blue-and-orange-abstract-painting-V_WBdOLOgJU"
    },
    {
      title: "Meditative Flow",
      description: "Acrylic and ink on panel, 30″ × 30″",
      image: "https://images.unsplash.com/photo-1608501821300-4f99e58bba77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2040&q=80",
      attribution: "https://unsplash.com/photos/blue-and-multicolored-abstract-painting-cEzMOp5FtV4"
    },
    {
      title: "Cosmic Dialogue",
      description: "Oil and gold leaf on canvas, 48″ × 36″",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1958&q=80",
      attribution: "https://unsplash.com/photos/abstract-painting-58Z17lnVS4U"
    },
    {
      title: "Structural Chaos",
      description: "Acrylic and spray paint on canvas, 40″ × 60″",
      image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      attribution: "https://unsplash.com/photos/blue-and-white-abstract-painting-XqYlvd5DGKA"
    },
  ];

  return (
   <section data-editor-tag="AkO4PYUabA"  id="gallery" className="py-24 bg-background/50">
     <div data-editor-tag="NKEClvnlw7"  className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
       <div data-editor-tag="cd8BQ12mlB"  className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
         <div data-editor-tag="rvKy585QrO"  className="space-y-2">
           <div data-editor-tag="RLYNEt8RIZ"  className="inline-block rounded-lg bg-foreground/10 px-3 py-1 text-sm">
              Featured Work
            </div>
           <h2 data-editor-tag="WuoGaQC24P"  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Gallery Collection
            </h2>
           <p data-editor-tag="hl8IZmDkYc"  className="mx-auto max-w-[700px] text-foreground/70 md:text-xl">
              Explore the vibrant world of abstract expressionism through these selected pieces.
              Each artwork represents a unique emotional journey and technique.
            </p>
          </div>
        </div>
        
       <div data-editor-tag="183Cuc5mKH"  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork, index) => (
           <div data-editor-tag="4vDrIvPdKw"  key={index} className="group">
             <Card data-editor-tag="kEwxjFCbyA"  className="overflow-hidden border-0 bg-background transition-all duration-300 hover:shadow-lg">
               <CardContent data-editor-tag="HHAE0QqNV7"  className="p-0">
                 <div data-editor-tag="qwQHvDfl38"  className="relative overflow-hidden aspect-[4/3]">
                    {/* Image with attribution comment */}
                   <img data-editor-tag="LYqI1RErGI"  
                      src={artwork.image} 
                      alt={artwork.title} 
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Attribution comment for Unsplash image */}
                    {/* Image from Unsplash: {artwork.attribution} */}
                  </div>
                 <div data-editor-tag="XUhmvLE8eu"  className="p-6">
                   <h3 data-editor-tag="Jy2l59BJvU"  className="text-xl font-semibold mb-2">{artwork.title}</h3>
                   <p data-editor-tag="7anL6KKsQa"  className="text-sm text-foreground/70 mb-4">{artwork.description}</p>
                   <Button data-editor-tag="sWF4uIXOGx"  variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
       <div data-editor-tag="NHhrPtQs9x"  className="mt-12 text-center">
         <Button data-editor-tag="gYD53SXBLu"  asChild size="lg">
           <Link data-editor-tag="kB32mOmej2"  href="#full-collection">View Full Collection</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}