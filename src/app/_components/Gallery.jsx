import Header from "@/components/common/SectionHeader"
import GalleryCard from "@/components/common/GalleryCard"
export default function Gallery(){
    return(
        <div className="gallery_section pb-18 pt-3">
            <div className="container mx-auto px-4">
                <Header pretitle="Join our adventures" title="Discover the world with us"/>
                <div className="gallery_cards mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-2.5">
                    <GalleryCard img="/images/Iceland.png" city="Iceland"/>
                    <GalleryCard img="/images/Italy.png" city="Italy"/>
                    <GalleryCard img="/images/Dubai.png" city="Dubai"/>
                    <GalleryCard img="/images/Patagonia.png" city="Patagonia"/>
                </div>
            </div>
            
        </div>
    )
}