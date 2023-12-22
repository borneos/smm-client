import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardBlog from '@/components/CardBlog';
import CardEvent from '@/components/CardEvent';
import CarouselBanner from '@/components/CarouselBanner';
import Header from '@/components/Header';
import Layout from '@/components/Layout';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Slider from 'react-slick';
import { pageview } from '@/public/gtag';
import ENV from '@/constant/env';
import { STATUS } from '@/constant/status';
import HeadMain from '@/components/HeadMain';
import Link from 'next/link';
const OG_IMAGE =
  'https://res.cloudinary.com/borneos-co/image/upload/v1701798418/pktbeedufest/asset/umkm-fest-2023_cn7ddp.png';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const router = useRouter();
  const [dataBanner, setDataBanner] = useState([]);
  const [dataBlogs, setDataBlogs] = useState([]);

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: false,
    centerPadding: '8px',
    slidesToShow: 1.1,
    speed: 500,
    arrows: false,
    dots: false,
  };

  const fetchBanner = async () => {
    await axios
      .get(`${ENV.API}banners`)
      .then((response) => {
        if (response?.status === STATUS.SUCCESS) {
          setDataBanner(response?.data?.data);
        }
      })
      .catch((error) => {
        console.error(error, 'Login failed');
        return;
      });
  };

  const fetchBlogs = async () => {
    await axios
      .get(`${ENV.API}blogs`)
      .then((response) => {
        if (response?.status === STATUS.SUCCESS) {
          setDataBlogs(response?.data?.data);
        }
      })
      .catch((error) => {
        console.error(error, 'Login failed');
        return;
      });
  };

  useEffect(() => {
    fetchBanner();
    fetchBlogs();
  }, []);

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
        Homepage
      </div>
    </>
  );
}
