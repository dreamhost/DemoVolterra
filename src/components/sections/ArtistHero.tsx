import Link from 'next/link';
import { Button } from "@src/components/ui/button";

export function ArtistHero() {
  return (
   <section data-editor-tag="nafzrZrwFf"  id="hero" className="py-24 md:py-32 bg-background overflow-hidden relative">
      {/* Abstract paint splash decorative elements */}
     <div data-editor-tag="XWNLEjq2GP"  className="absolute -top-20 -right-20 w-96 h-96 bg-foreground/5 rounded-full blur-3xl opacity-70"></div>
     <div data-editor-tag="IUktCtoEWW"  className="absolute bottom-10 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
      
     <div data-editor-tag="HbrGb88Tk2"  className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
       <div data-editor-tag="xECgJyKc6o"  className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
         <div data-editor-tag="NoZGLVomdc"  className="flex flex-col space-y-6 text-left">
           <div data-editor-tag="NSZg7dboyU"  className="inline-block rounded-lg bg-foreground/10 px-3 py-1 text-sm">
              Abstract Artist
            </div>
           <h1 data-editor-tag="GcltaCx97Y"  className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
             <span data-editor-tag="EGBdJp29xK"  className="block">Elena Vivaldi</span>
             <span data-editor-tag="KjYiHnpg34"  className="block italic text-primary mt-2">Abstract Expressionism</span>
            </h1>
           <p data-editor-tag="cwtRP599Ek"  className="max-w-[600px] text-foreground/70 text-lg md:text-xl">
              Creating vibrant, emotion-driven abstract art that transforms spaces and ignites imagination. Each canvas tells a unique story through color and form.
            </p>
           <div data-editor-tag="WflwLj4OFE"  className="flex flex-col sm:flex-row gap-3">
             <Button data-editor-tag="S3tXWicXGv"  asChild size="lg">
               <Link data-editor-tag="27XjaGUBOq"  href="#gallery">Explore Gallery</Link>
              </Button>
             <Button data-editor-tag="L1NKSUAh7P"  asChild variant="outline" size="lg">
               <Link data-editor-tag="WGkrwlXpEA"  href="#about">About the Artist</Link>
              </Button>
            </div>
          </div>
          
         <div data-editor-tag="yhPb8VaQmg"  className="relative group">
           <div data-editor-tag="b1xuNljFgH"  className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/50 to-primary/30 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
           <div data-editor-tag="CE8PQCkr9O"  className="relative overflow-hidden rounded-lg">
             <img data-editor-tag="qoiKS6c0Yv"  
                src="https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
                alt="Elena Vivaldi painting abstract art in her studio" 
                className="w-full h-auto object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
              {/* Attribution comment for Unsplash image */}
              {/* Image by Mikhail Vasilyev on Unsplash: https://unsplash.com/photos/NodtnCsLdTE */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}