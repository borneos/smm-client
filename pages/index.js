import HeadMain from '@/components/HeadMain';
import { MainNav } from '@/components/ui/main-nav';
import { Sidebar } from '@/components/ui/sidebar';
const OG_IMAGE =
  'https://res.cloudinary.com/borneos-co/image/upload/v1701798418/pktbeedufest/asset/umkm-fest-2023_cn7ddp.png';

export default function Home() {
  return (
    <>
      <HeadMain
        title="PKT UMKM Festival 2023"
        description="Pupuk Kaltim UMKM Festival 2023"
        keyword="umkm, festival, pkt, pupuk kaltim"
        ogTitle="PKT UMKM Festival 2023"
        ogDescription="PKT UMKM Festival 2023."
        ogImageUrl={OG_IMAGE}
        ogImageAlt="PKT UMKM Festival 2023"
        ogImageType="image/png"
        ogImageHeight="561"
        ogImageWidth="561"
        ogUrl="https://pktumkmfestival.com"
      />
      <div>
        Home
      </div>
    </>
  );
}
