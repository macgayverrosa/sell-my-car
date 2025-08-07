export default function FooterColumns() {
  return (
    <div className="md:col-span-2 md:col-start-3">
      <div className="grid md:grid-cols-3 text-right">
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Swedish Massage
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Deep Tissue
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Hot Stone
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Prenatal
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Our Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Connect</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
