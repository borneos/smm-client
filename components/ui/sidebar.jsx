import { cn } from "@/libs/utils"
import { Button } from "./button"

import { HiOutlineColorSwatch, HiOutlineCalculator, HiOutlineCog, HiOutlinePhone, HiOutlineQuestionMarkCircle, HiOutlineUsers, HiOutlineGift, HiOutlineLibrary, HiOutlineNewspaper, HiOutlineDocumentText } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/router";
import { splitUrlIntoSegments } from "@/libs/utils";

export function Sidebar({ className, playlists }) {
  const router = useRouter()
  const urls = splitUrlIntoSegments(router.pathname || []);
  const selectedUrl = urls[1]

  const menus = [{
    id: 0,
    name: 'master',
    label: 'Master',
    children: [
      {
        id: 0,
        name: 'master-users',
        label: 'Master User',
        url: 'admin/master-users',
        icon: <HiOutlineUsers size={20} />
      },
      {
        id: 1,
        name: 'master-merchants',
        label: 'Master Merchant',
        url: 'admin/master-merchants',
        icon: <HiOutlineLibrary size={20} />
      },{
        id: 2,
        name: 'master-products',
        label: 'Master Product',
        url: 'admin/master-products',
        icon: <HiOutlineGift size={20} />
      }
    ]
  },{
    id: 1,
    name: 'main',
    label: 'Main',
    children: [
      {
        id: 0,
        name: 'transactions',
        label: 'Transaction',
        url: 'admin/transactions',
        icon: <HiOutlineCalculator size={20} />
      },
      {
        id: 1,
        name: 'about',
        label: 'About',
        url: 'admin/about',
        icon: <HiOutlineQuestionMarkCircle size={20} />
      },
      {
        id: 2,
        name: 'blogs',
        label: 'Blog',
        url: 'admin/blogs',
        icon: <HiOutlineNewspaper size={20} />
      },
      {
        id: 3,
        name: 'contact',
        label: 'Contact',
        url: 'admin/contact',
        icon: <HiOutlinePhone size={20} />
      },
      {
        id: 4,
        name: 'incoming-contact',
        label: 'Incoming Contact',
        url: 'admin/incoming-contact',
        icon: <HiOutlineDocumentText size={20} />
      },
      {
        id: 5,
        name: 'config',
        label: 'Config',
        url: 'admin/config',
        icon: <HiOutlineCog size={20} />
      }
    ]
  }];

  return (
    <div className={cn("min-h-[650px]", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <Link href="/admin/dashboard">
              <Button variant={selectedUrl === 'dashboard' ? 'secondary' : 'ghost'} className="w-full justify-start">
                <HiOutlineColorSwatch size={20} />
                <span className="pl-2">Dashboard</span>
              </Button>
            </Link>
          </div>
        </div>
        {menus.map(item => 
          <div key={item.id} className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              {item.label}
            </h2>
            <div className="space-y-1">
              {item.children.map(itemChildren => 
                <Link key={itemChildren.id} href={`/${itemChildren.url}`}>
                  <Button variant={selectedUrl === itemChildren.name ? 'secondary' : 'ghost'} className="w-full justify-start">
                    {itemChildren.icon}
                    <span className="pl-2">{itemChildren.label}</span>
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}