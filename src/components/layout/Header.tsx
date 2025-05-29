import Link from "next/link";
import { Button } from "@src/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@src/components/ui/sheet";

export function Header() {
  return (
   <header data-editor-tag="lUMQsE0Ntn"  className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
     <div data-editor-tag="fuvllpAcAH"  className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
       <div data-editor-tag="rBN7PxLX8F"  className="flex gap-6 md:gap-10">
         <Link data-editor-tag="K6oE3Sm6tx"  href="/" className="flex items-center space-x-2">
           <span data-editor-tag="FxCbNVhBuD"  className="inline-block font-bold italic text-xl">Chromatic Canvas</span>
          </Link>
         <nav data-editor-tag="ZD5XFo2Tj1"  className="hidden md:flex gap-6">
           <Link data-editor-tag="KzAGxnpGvq" 
              href="#gallery"
              className="flex items-center text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Gallery
            </Link>
           <Link data-editor-tag="vdCFPmKs7z" 
              href="#about"
              className="flex items-center text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80"
            >
              About
            </Link>
           <Link data-editor-tag="1UbpZGWIqW" 
              href="#exhibitions"
              className="flex items-center text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Exhibitions
            </Link>
           <Link data-editor-tag="9snxDSr0xR" 
              href="#contact"
              className="flex items-center text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Contact
            </Link>
          </nav>
        </div>
       <div data-editor-tag="5euoVyDWBE"  className="hidden md:flex items-center space-x-4">
         <Button data-editor-tag="bLZuz0y9iQ"  asChild variant="ghost">
           <Link data-editor-tag="HVyuBuL31h"  href="#commission">Commission Art</Link>
          </Button>
         <Button data-editor-tag="V2LrLspHZ8"  asChild>
           <Link data-editor-tag="tCWGcoHiuI"  href="#contact">Get in Touch</Link>
          </Button>
        </div>
       <Sheet data-editor-tag="D86E37RmwJ" >
         <SheetTrigger data-editor-tag="poPaceeNYm"  asChild className="md:hidden">
           <Button data-editor-tag="8mj4YNmtFu"  variant="outline" size="icon">
             <svg data-editor-tag="assr00yWhl" 
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
               <line data-editor-tag="JZeHme1s3y"  x1="3" y1="6" x2="21" y2="6" />
               <line data-editor-tag="64VKsTMrNl"  x1="3" y1="12" x2="21" y2="12" />
               <line data-editor-tag="1uE4eFhxco"  x1="3" y1="18" x2="21" y2="18" />
              </svg>
             <span data-editor-tag="t4rVIkCRgS"  className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
         <SheetContent data-editor-tag="C6BA3dDyAJ"  side="right" className="w-[240px] sm:w-[300px]">
           <div data-editor-tag="i4JPTVXfQc"  className="flex flex-col gap-4 py-6">
             <Link data-editor-tag="fktGyJNYD6" 
                href="#gallery"
                className="text-sm font-medium hover:underline"
              >
                Gallery
              </Link>
             <Link data-editor-tag="YU6ihAHirS" 
                href="#about"
                className="text-sm font-medium hover:underline"
              >
                About
              </Link>
             <Link data-editor-tag="BMlwO8zrbQ" 
                href="#exhibitions"
                className="text-sm font-medium hover:underline"
              >
                Exhibitions
              </Link>
             <Link data-editor-tag="Q4YZwK8Xyx" 
                href="#contact"
                className="text-sm font-medium hover:underline"
              >
                Contact
              </Link>
             <div data-editor-tag="3jRWBH3YB6"  className="flex flex-col gap-2 mt-4">
               <Button data-editor-tag="sPVmpz7sm3"  asChild variant="ghost">
                 <Link data-editor-tag="XhjKTxSIuS"  href="#commission">Commission Art</Link>
                </Button>
               <Button data-editor-tag="lWElRpqNLa"  asChild>
                 <Link data-editor-tag="DJ8eoolZCb"  href="#contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}