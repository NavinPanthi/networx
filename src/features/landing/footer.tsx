import {
  Facebook01Icon,
  InstagramIcon,
  TiktokIcon,
  YoutubeIcon,
} from "hugeicons-react";

const Footer = () => {
  return (
    <footer className="bg-shade-dark px-4 py-16 tracking-wider text-shade-light lg:px-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 border-b border-gray-700 pb-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Platform Info */}
        <div>
          <h3 className="mb-3 font-bold text-white">ABOUT Networx</h3>
          <p className="mb-4 text-sm">
            Your gateway to cybersecurity jobs, skill-building, and professional
            growth. We connect users with leading companies.
          </p>
          <div className="flex space-x-4 text-lg text-white">
            <Facebook01Icon className="cursor-pointer hover:text-gray-400" />
            <InstagramIcon className="cursor-pointer hover:text-gray-400" />
            <TiktokIcon className="cursor-pointer hover:text-gray-400" />
            <YoutubeIcon className="cursor-pointer hover:text-gray-400" />
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="mb-3 font-bold text-white">USEFUL LINKS</h3>
          <ul className="space-y-2 text-sm">
            <li>How It Works</li>
            <li>FAQ</li>
            <li>Support</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="mb-3 font-bold text-white">POLICIES</h3>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Job Guidelines</li>
            <li>Code of Conduct</li>
          </ul>
        </div>

        {/* Student Account */}
        <div>
          <h3 className="mb-3 font-bold text-white">STUDENT ACCOUNT</h3>
          <ul className="space-y-2 text-sm">
            <li>Sign In</li>

            <li>Profile Settings</li>
          </ul>
        </div>
      </div>

      {/* Branding & Copyright */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center space-y-4 pt-6">
        <div className="border border-white px-6 py-1 text-sm tracking-widest text-white">
          NX
        </div>

        <p className="text-center text-sm">
          Copyright © 2025 Networx. All Rights Reserved.
          <br />
          Connecting users with cybersecurity opportunities worldwide.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
