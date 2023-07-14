import Link from "next/link";
import type { ReactNode } from "react";
import Sidebar from "src/components/Sidebar/Sidebar";
import FacebookIcon from "src/icons/FacebookIcon";
import InstagramIcon from "src/icons/InstagramIcon";
import YouTubeIcon from "src/icons/YouTubeIcon";

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gray-50">
      <Sidebar />
      <div className="w-full min-h-screen px-4 pt-2  max-w-[1440px] overflow-x-hidden mx-auto">
        <div className="sm:ml-[64px]">
          {children}
          <footer className="bg-purple-500 py-2 rounded-tl-md rounded-tr-md">
            <div className="mt-2 rounded-t-lg text-white">
              <div className="flex flex-wrap p-4 gap-6  justify-evenly items-start">
                <div className="w-full max-w-[180px] flex flex-col item-center">
                  <h1 className="uppercase font-bold">About Us</h1>
                  <p>Serving the heart & soul of the community</p>
                </div>
                <div className="w-full max-w-[180px] flex flex-col item-center">
                  <h1 className="uppercase font-bold">Quick Links</h1>
                  <Link
                    className="transition-all hover:text-gray-200"
                    href="/about"
                  >
                    About
                  </Link>
                  <Link
                    className="transition-all hover:text-gray-200"
                    href="/blog"
                  >
                    Blog
                  </Link>
                  <Link
                    className="transition-all hover:text-gray-200"
                    href="/contact"
                  >
                    Contact
                  </Link>
                  <Link
                    className="transition-all hover:text-gray-200"
                    href="/services"
                  >
                    Services
                  </Link>
                </div>
                <div className="w-full max-w-[180px] flex flex-col item-center">
                  <h1 className="uppercase font-bold">Get In Touch</h1>
                  <div className="flex items-center gap-2">
                    <FacebookIcon className="w-8 fill-white" stroke="1px" />
                    <InstagramIcon className="w-8 fill-white" stroke="1px" />
                    <YouTubeIcon className="w-8 fill-white" stroke="1px" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between border-t pt-2 px-4">
                <p>© 2023 Arawelo Medical Center</p>
                <div>
                  <Link
                    className="transition-all hover:text-gray-200"
                    href="privacy-policy"
                  >
                    Privacy Policy
                  </Link>{" "}
                  | Cookies Policy | Terms and Conditions | Website
                  Accessibility
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
