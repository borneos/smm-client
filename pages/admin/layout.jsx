import { MainNav } from "@/components/ui/main-nav";
import { Sidebar } from "@/components/ui/sidebar";
import { UserNav } from "@/components/ui/user-nav";

export default function Layout(props) {
  const {title, children} = props;
  return(
    <>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <UserNav />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="bg-background">
          <div className="grid lg:grid-cols-5">
            <Sidebar className="hidden lg:block" />
            <div className="col-span-3 lg:col-span-4 lg:border-l">
              <div className="flex-1 space-y-4 px-8 py-4">
                <div className="flex items-center justify-between space-y-2">
                  <h2 className="text-3xl font-semibold tracking-normal">{title || ''}</h2>
                </div>
              </div>
              <div className="px-4 py-6 lg:px-8">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-orange-50 p-4">
        <span className="text-gray-500">Copyright &copy; 2024 SMM Client Borneos</span>
      </div>
    </>
  )
}