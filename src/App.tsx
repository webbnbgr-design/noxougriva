import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Users, 
  Scale, 
  Home, 
  Menu, 
  X, 
  ChevronRight,
  Heart,
  FileText,
  CheckCircle2
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Αρχική', href: '#home' },
    { name: 'Υπηρεσίες', href: '#services' },
    { name: 'Η Φιλοσοφία μας', href: '#philosophy' },
    { name: 'Επικοινωνία', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="font-serif text-xl md:text-2xl font-semibold tracking-tight text-brand-dark">
            ΝΟΧΟΥ - ΓΡΙΒΑ
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-slate-500 font-medium">
            ΔΙΚΗΓΟΡΙΚΟ ΓΡΑΦΕΙΟ
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-brand-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:2310555589"
            className="bg-brand-dark text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-brand-accent transition-all flex items-center gap-2"
          >
            <Phone size={16} />
            2310 555589
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-dark" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 md:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-slate-700 hover:text-brand-accent"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="tel:2310555589"
                className="flex items-center gap-3 text-brand-accent font-semibold py-2"
              >
                <Phone size={20} />
                2310 555589
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-brand-warm">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/50 -skew-x-12 translate-x-1/4 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue text-brand-accent text-xs font-semibold uppercase tracking-wider mb-6">
            <ShieldCheck size={14} />
            Εμπιστοσύνη & Εχεμύθεια
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-brand-dark leading-tight mb-6">
            Προτεραιότητά μας η δική σας <span className="text-brand-accent italic">ηρεμία</span> και η δίκαιη επίλυση των θεμάτων σας.
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            Στο γραφείο μας, αντιμετωπίζουμε κάθε υπόθεση με την ανθρώπινη προσέγγιση που της αξίζει, προσφέροντας εξειδικευμένες νομικές λύσεις με ταχύτητα και ειλικρίνεια.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#services"
              className="bg-brand-dark text-white px-8 py-4 rounded-xl font-medium hover:bg-brand-accent transition-all flex items-center justify-center gap-2 group"
            >
              Οι Υπηρεσίες μας
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="tel:2310555589"
              className="bg-white border border-slate-200 text-brand-dark px-8 py-4 rounded-xl font-medium hover:border-brand-accent hover:text-brand-accent transition-all flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Άμεση Επικοινωνία
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2070" 
              alt="Law Office" 
              className="w-full h-[500px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[240px]">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-brand-blue rounded-lg text-brand-accent">
                <Clock size={20} />
              </div>
              <span className="font-bold text-brand-dark">Άμεση Ανταπόκριση</span>
            </div>
            <p className="text-sm text-slate-500">
              Δίπλα σας, όταν μας χρειάζεστε - Χωρίς αναμονές.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Οικογενειακό Δίκαιο',
      description: 'Διαζύγια, επιμέλεια τέκνων, διατροφή και ρύθμιση περιουσιακών σχέσεων με ευαισθησία και διακριτικότητα.',
      icon: <Heart className="w-8 h-8" />,
      features: ['Συναινετικά Διαζύγια', 'Επιμέλεια & Επικοινωνία', 'Διατροφή Τέκνων'],
      highlight: true
    },
    {
      title: 'Κτηματολόγιο',
      description: 'Ολοκληρωμένες λύσεις για δηλώσεις, ενστάσεις και διορθώσεις στο Εθνικό Κτηματολόγιο.',
      icon: <MapPin className="w-8 h-8" />,
      features: ['Δηλώσεις Ιδιοκτησίας', 'Διορθώσεις Αρχικών Εγγραφών', 'Ενστάσεις'],
      highlight: true
    },
    {
      title: 'Αστικό Δίκαιο',
      description: 'Εκπροσώπηση σε υποθέσεις αστικής φύσεως, μισθωτικές διαφορές και συμβάσεις.',
      icon: <Scale className="w-8 h-8" />,
      features: ['Μισθωτικές Διαφορές', 'Αποζημιώσεις', 'Συμβάσεις'],
      highlight: false
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-4">Εξειδικευμένες Νομικές Υπηρεσίες</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Εστιάζουμε σε τομείς που απαιτούν ιδιαίτερη προσοχή και λεπτούς χειρισμούς, διασφαλίζοντας τα συμφέροντά σας.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-3xl border transition-all duration-300 ${
                service.highlight 
                ? 'bg-brand-blue/30 border-brand-blue hover:shadow-lg' 
                : 'bg-white border-slate-100 hover:border-brand-blue hover:shadow-md'
              }`}
            >
              <div className="text-brand-accent mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map(feature => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-slate-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Philosophy = () => {
  const values = [
    { title: 'Εχεμύθεια', desc: 'Απόλυτη προστασία των προσωπικών σας δεδομένων.', icon: <ShieldCheck /> },
    { title: 'Εμπιστοσύνη', desc: 'Χτίζουμε σχέσεις ζωής με τους εντολείς μας.', icon: <Users /> },
    { title: 'Ειλικρίνεια', desc: 'Ξεκάθαρη εικόνα για την πορεία της υπόθεσής σας.', icon: <FileText /> },
    { title: 'Ταχύτητα', desc: 'Άμεση ανταπόκριση σε κάθε σας αίτημα.', icon: <Clock /> }
  ];

  return (
    <section id="philosophy" className="py-24 bg-brand-warm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-6">Η Φιλοσοφία μας</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Πιστεύουμε ότι η δικηγορία δεν είναι μόνο η εφαρμογή των νόμων, αλλά η κατανόηση των ανθρώπινων αναγκών. Στο γραφείο μας, η προσωπική σχέση με τον εντολέα είναι η βάση για κάθε επιτυχημένη συνεργασία.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-white flex items-center justify-center text-brand-accent shadow-sm">
                    {v.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-1">{v.title}</h4>
                    <p className="text-sm text-slate-500">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2070" 
              alt="Philosophy" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-blue rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => (
  <section className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <blockquote className="font-serif text-2xl md:text-3xl text-brand-dark italic mb-8 leading-relaxed">
          "Σε ελάχιστους δικηγόρους βρίσκεις τέτοια ανταπόκριση. Η κ. Νόχου - Γρίβα είναι δίπλα σου σε κάθε βήμα με επαγγελματισμό και ανθρωπιά."
        </blockquote>
        <p className="text-slate-500 font-medium">— Απόσπασμα από κριτικές πελατών</p>
      </motion.div>
    </div>
  </section>
);

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-brand-blue/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-8">Επικοινωνήστε μαζί μας</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-accent shadow-sm shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark mb-1">Διεύθυνση</h4>
                  <p className="text-slate-600">Σαλαμίνος 10, Θεσσαλονίκη (Κέντρο), Τ.Κ. 54625</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-accent shadow-sm shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark mb-1">Τηλέφωνο</h4>
                  <a href="tel:2310555589" className="text-slate-600 hover:text-brand-accent transition-colors">2310 555589</a>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-accent shadow-sm shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark mb-1">Ωράριο</h4>
                  <p className="text-slate-600">Δευτέρα - Παρασκευή: 09:00 - 20:00</p>
                  <p className="text-xs text-slate-400 mt-1">* Κατόπιν ραντεβού</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-xl"
          >
            <h3 className="text-xl font-bold text-brand-dark mb-6">Πώς μπορούμε να βοηθήσουμε;</h3>
            <p className="text-slate-600 mb-8">
              Καλέστε μας απευθείας για να συζητήσουμε την υπόθεσή σας. Η άμεση ανταπόκριση είναι η δέσμευσή μας.
            </p>
            <div className="space-y-4">
              <a 
                href="tel:2310555589"
                className="w-full bg-brand-dark text-white py-4 rounded-xl font-bold text-center block hover:bg-brand-accent transition-all shadow-lg shadow-brand-dark/10"
              >
                Κλήση Τώρα: 2310 555589
              </a>
              <p className="text-center text-sm text-slate-400">
                Δεν απαιτείται προηγούμενη κράτηση για τηλεφωνική ενημέρωση.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-brand-dark text-white py-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/10 pb-12 mb-12">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-serif text-2xl font-semibold tracking-tight">
            ΝΟΧΟΥ - ΓΡΙΒΑ
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-medium">
            ΔΙΚΗΓΟΡΙΚΟ ΓΡΑΦΕΙΟ
          </span>
        </div>
        <div className="flex gap-8 text-sm text-white/70">
          <a href="#home" className="hover:text-white transition-colors">Αρχική</a>
          <a href="#services" className="hover:text-white transition-colors">Υπηρεσίες</a>
          <a href="#philosophy" className="hover:text-white transition-colors">Φιλοσοφία</a>
          <a href="#contact" className="hover:text-white transition-colors">Επικοινωνία</a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
        <p>© {new Date().getFullYear()} Νόχου - Γρίβα Παναγιώτα & Συνεργάτες. Με επιφύλαξη παντός δικαιώματος.</p>
        <p>Σχεδιασμός με έμφαση στην ηρεμία και την εμπιστοσύνη.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Philosophy />
      <SocialProof />
      <Contact />
      <Footer />
    </div>
  );
}
