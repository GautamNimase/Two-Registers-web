import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
export default function Footer() {
  return (
    <footer className="mt-24 relative border-t border-white/5 bg-navy">
      {/* Background wave image */}
      <div className="absolute inset-0 -z-10 opacity-70">
        <img src="/images/footer-18.jpeg" alt="Footer background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
      </div>
      <div className="container-max grid gap-10 md:grid-cols-4 pt-16 pb-10">
        <div className="card-dark p-6 flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold">Two Registers</h3>
          <div className="mt-4">
            <img src="/images/footer-18.jpeg" alt="Two Registers" className="h-28 w-28 object-cover rounded-xl border border-white/10" />
          </div>
          <p className="mt-4 text-textSecondary max-w-xs">
            559/3 Sopan Nagar, Saswad,
            <br />
            Pune, Maharashtra India.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Links</h4>
          <ul className="mt-4 space-y-2 text-textSecondary">
            <li><a href="#about" className="hover:text-textPrimary">About</a></li>
            <li><a href="#services" className="hover:text-textPrimary">Services</a></li>
            <li><a href="/contact" className="hover:text-textPrimary">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">OUR SERVICES</h4>
          <ul className="mt-4 space-y-2 text-textSecondary">
            <li>Energy Meter Monitering System</li>
            <li>PM/BM Scheduling</li>
            <li>Work Permit Automation</li>
            <li>Full Stack Development</li>
            <li>Python Development</li>
            <li>Cloud Deployment / Migration</li>
            <li>Wordpress Development</li>
            <li>AI & ML Integration & Development</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Social Media Links.</h4>
          <p className="mt-2 text-textSecondary">Follow us on social media.</p>
          <div className="mt-4 flex items-center gap-4 text-textSecondary">
            <a href="#" aria-label="Twitter" className="hover:text-accent"><FaTwitter /></a>
            <a href="#" aria-label="Facebook" className="hover:text-accent"><FaFacebookF /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-accent"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      <div className="pt-4 pb-6 text-center text-sm text-textSecondary">© 2025 Two Registers. All rights reserved.</div>
    </footer>
  )
}


