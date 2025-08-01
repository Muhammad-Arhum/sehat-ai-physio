import { Heart, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@sehat.pk", label: "Email" }
  ];

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Heart className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">Sehat.PK</span>
            </div>
            <p className="text-background/80 max-w-md">
              AI-powered physiotherapy platform revolutionizing home rehabilitation 
              through intelligent monitoring and real-time feedback.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors animate-bounce-hover"
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {["How It Works", "For Doctors", "For Patients", "Demo"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-background/80 hover:text-background transition-colors hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <a 
                  href="mailto:hello@sehat.pk"
                  className="hover:text-background transition-colors hover:underline"
                >
                  hello@sehat.pk
                </a>
              </li>
              <li>
                <a 
                  href="mailto:partnerships@sehat.pk"
                  className="hover:text-background transition-colors hover:underline"
                >
                  partnerships@sehat.pk
                </a>
              </li>
              <li className="text-sm">
                Karachi, Pakistan
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-background/60 text-sm">
            © 2024 Sehat.PK. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-background/60 hover:text-background/80 text-sm transition-colors hover:underline"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;