import React, { useState } from 'react';
import { 
  Menu, X, CheckCircle, Star, ArrowRight, ShieldCheck, 
  Map, FlaskConical, AlertCircle, ShoppingCart, ChevronDown, ChevronUp, ChevronRight, TicketPercent
} from 'lucide-react';

// Components defined in the same file for simplicity and single-file requirement structure, 
// though usually split in production.

// --- Navigation ---
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <FlaskConical className="h-8 w-8 text-emerald-900" />
              <span className="font-heading font-bold text-xl text-emerald-900 tracking-tight">
                The Kitchen Cure
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#problem" className="text-gray-600 hover:text-emerald-900 font-medium transition">How It Works</a>
            <a href="#reviews" className="text-gray-600 hover:text-emerald-900 font-medium transition">Testimonials</a>
            <a href="#faq" className="text-gray-600 hover:text-emerald-900 font-medium transition">FAQ</a>
            <button 
              onClick={scrollToPricing}
              className="bg-emerald-900 text-white px-6 py-2.5 rounded-full font-bold hover:bg-emerald-800 transition shadow-lg"
            >
              Get Started
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#problem" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-600 font-medium">How It Works</a>
            <a href="#reviews" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-600 font-medium">Testimonials</a>
            <button 
              onClick={scrollToPricing}
              className="w-full text-left block px-3 py-2 text-emerald-900 font-bold"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

// --- Hero Section ---
const Hero = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-emerald-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-emerald-800/50 rounded-full px-4 py-1.5 mb-8 border border-emerald-700">
          <span className="flex h-2 w-2 rounded-full bg-gold"></span>
          <span className="text-sm font-medium text-emerald-100 uppercase tracking-wider">New Scientific Discovery</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight mb-6 leading-tight">
          Silence Joint Pain in Minutes <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">
            Using Only Ingredients from Your Kitchen
          </span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-xl text-emerald-100 mb-10 leading-relaxed">
          Unlock the <span className="font-bold text-white">Joint Relief Lab Dashboard</span>: An interactive map revealing 35+ science-backed recipes to combat inflammation, stiffness, and pain—without pills or side effects.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button 
            onClick={scrollToPricing}
            className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-gold-hover text-emerald-900 font-bold text-lg rounded-lg shadow-[0_0_20px_rgba(212,175,55,0.5)] transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 animate-pulse-slow"
          >
            Get Instant Access to the Lab
            <ArrowRight className="h-5 w-5" />
          </button>
          <div className="text-sm text-emerald-200 mt-2 sm:mt-0 flex items-center gap-1">
             <ShieldCheck className="h-4 w-4" /> 60-Day Guarantee
          </div>
        </div>
      </div>
      
      {/* Curve Divider - Updated to match next section background (gray-50) */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-50" style={{ clipPath: 'ellipse(70% 50% at 50% 100%)' }}></div>
    </section>
  );
};

// --- Problem Section ---
const Problem = () => {
  return (
    <section id="problem" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Is Your Medicine Cabinet <span className="text-red-600">Doing More Harm Than Good?</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-8"></div>
          <img 
            src="https://i.imgur.com/kfQODwh.png" 
            alt="Dangers of medication" 
            className="mx-auto rounded-xl shadow-lg max-w-full md:max-w-3xl"
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-3 bg-red-50 rounded-full">
                <AlertCircle className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">The Cycle of Dependency</h3>
                <p className="text-gray-600">Prescription painkillers often mask symptoms without fixing the root cause. You take a pill, the pain fades for a few hours, and then returns with a vengeance.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-3 bg-red-50 rounded-full">
                <AlertCircle className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dangerous Side Effects</h3>
                <p className="text-gray-600">Stomach ulcers, liver strain, and dizziness. The fine print on your medicine bottle is terrifying. You shouldn't have to destroy your health to find relief.</p>
              </div>
            </div>

             <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-3 bg-red-50 rounded-full">
                <AlertCircle className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">The "Aging" Myth</h3>
                <p className="text-gray-600">Doctors might tell you it's "just part of getting older." But millions of people in their 70s and 80s live pain-free. It's not age; it's inflammation.</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
             <img 
               src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800" 
               alt="Frustrated person with pills" 
               className="rounded-2xl shadow-xl grayscale hover:grayscale-0 transition duration-500"
             />
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg max-w-xs border-l-4 border-red-500">
               <p className="italic text-gray-600">"I was spending over $150 a month on meds that barely worked. I knew there had to be a better way."</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Solution Section ---
const Solution = () => {
  return (
    <section className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative group cursor-pointer">
            {/* Mockup Representation */}
            <div className="bg-white rounded-3xl shadow-2xl p-4 border-8 border-gray-900 aspect-[4/3] overflow-hidden relative">
              <div className="absolute inset-0 bg-emerald-50 flex flex-col">
                 <div className="h-12 bg-emerald-900 flex items-center px-4 justify-between">
                    <span className="text-white font-bold text-sm">Relief Lab</span>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                 </div>
                 <div className="flex-1 p-6 flex gap-4">
                    <div className="w-1/3 bg-white rounded-lg shadow-inner p-4 flex flex-col items-center justify-center gap-2">
                       <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                         <Map className="text-emerald-600 h-8 w-8" />
                       </div>
                       <p className="text-xs font-bold text-center text-gray-700">Pain Area</p>
                       <div className="w-full h-2 bg-gray-100 rounded mt-2"></div>
                       <div className="w-full h-2 bg-gray-100 rounded"></div>
                       <div className="w-full h-2 bg-gray-100 rounded"></div>
                    </div>
                    <div className="w-2/3 space-y-3">
                       <div className="bg-white p-3 rounded shadow-sm border-l-4 border-gold">
                          <h4 className="font-bold text-emerald-900 text-sm">Turmeric Paste</h4>
                          <p className="text-xs text-gray-500">Prep: 5 mins</p>
                       </div>
                       <div className="bg-white p-3 rounded shadow-sm border-l-4 border-emerald-500">
                          <h4 className="font-bold text-emerald-900 text-sm">Ginger Compress</h4>
                          <p className="text-xs text-gray-500">Prep: 3 mins</p>
                       </div>
                       <div className="bg-white p-3 rounded shadow-sm border-l-4 border-emerald-500">
                          <h4 className="font-bold text-emerald-900 text-sm">Rosemary Bath</h4>
                          <p className="text-xs text-gray-500">Prep: 1 min</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all"></div>
            </div>
            
            {/* Floating Badges */}
            <div className="absolute -top-6 -right-6 bg-gold text-emerald-900 px-6 py-3 rounded-lg shadow-lg font-bold transform rotate-3">
              35+ Recipes
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 bg-emerald-100 p-4 rounded-xl">
                <Map className="h-8 w-8 text-emerald-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Interactive Body Map</h3>
                <p className="text-gray-600 mt-2">Simply click where it hurts—Knees, Back, Hands, Neck, Hips, or Feet. The dashboard instantly filters for specific remedies proven to help that area.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 bg-emerald-100 p-4 rounded-xl">
                <FlaskConical className="h-8 w-8 text-emerald-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">35+ Specialized Recipes</h3>
                <p className="text-gray-600 mt-2">From topical ointments to anti-inflammatory smoothies. Every recipe uses common ingredients you can find at any grocery store for under $10.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 bg-emerald-100 p-4 rounded-xl">
                <ShieldCheck className="h-8 w-8 text-emerald-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">The "Science Behind the Cure"</h3>
                <p className="text-gray-600 mt-2">We don't just tell you <em>what</em> to do. We explain <em>why</em> it works. Each recipe comes with a breakdown of the active chemical compounds involved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Social Proof Section ---
const reviews = [
  // Page 1 (The specific ones requested - Translated)
  { name: "marialourdes588", location: "California", rating: 5, img: "https://i.imgur.com/561Xts1.png", text: "My knee pain vanished after 4 days. I was skeptical that a simple grocery ingredient could do what meds couldn't, but the turmeric paste recipe is magic." },
  { name: "josenilda41", location: "Texas", rating: 5, img: "https://i.imgur.com/jMs6emy.png", text: "The back recipe is a miracle. I can finally garden without spending the next two days in bed." },
  { name: "elena7", location: "Florida", rating: 5, img: "https://i.imgur.com/NgRDV8B.png", text: "Loved the interactive map! It makes it so easy to find exactly what I need for my stiff fingers in the morning." },
  { name: "danilzasantos4", location: "Washington", rating: 5, img: "https://i.imgur.com/1pmqhsD.png", text: "Worth every penny. The scientific section really helped me understand my body better. Highly recommended." },
  { name: "patricia", location: "Illinois", rating: 5, img: "https://i.imgur.com/MVtcSBM.png", text: "I threw away my ibuprofen. Seriously. The ginger tea is all I need now." },
  { name: "roberto899s", location: "Georgia", rating: 5, img: "https://i.imgur.com/T7vxKL0.png", text: "Simple, clean, and effective. The dashboard is very easy to use, even for someone not tech-savvy like me." },
  { name: "humberto6888", location: "Virginia", rating: 5, img: "https://i.imgur.com/ShXdFQ1.png", text: "The 'Golden Milk' recipe changed my sleep completely. No more waking up with hip pain." },
  { name: "jumassantos1", location: "Massachusetts", rating: 5, img: "https://i.imgur.com/eLR3Rtv.png", text: "Finally something natural that actually works. My doctor was impressed with my improved mobility." },
  { name: "henrique4", location: "Colorado", rating: 5, img: "https://i.imgur.com/aceFtMX.png", text: "The shopping list bonus was a lifesaver. I bought everything I needed in one trip for under $20." },
  { name: "galileusilva90", location: "Arizona", rating: 5, img: "https://i.imgur.com/twROTB8.png", text: "60 days in and I feel 10 years younger. The Joint Relief Lab is the real deal." },
  
  // Page 2 Fakes (Translated)
  { name: "carlos_almeida", location: "Oregon", rating: 5, img: "https://picsum.photos/seed/carlos/100/100", text: "Impressive how something so simple can be so effective. I recommend it to everyone." },
  { name: "lucia.ferreira", location: "Louisiana", rating: 5, img: "https://picsum.photos/seed/lucia/100/100", text: "I bought it without much faith, but the results spoke for themselves. Hand pain decreased by 80%." },
  { name: "fernando_gomes", location: "Michigan", rating: 5, img: "https://picsum.photos/seed/fernando/100/100", text: "The scientific explanation makes all the difference. You understand what you are doing to your body." },
  { name: "amanda_souza", location: "North Carolina", rating: 5, img: "https://picsum.photos/seed/amanda/100/100", text: "Support was excellent when I had questions about access. 10/10 product." },
  { name: "ricardo.o", location: "Pennsylvania", rating: 5, img: "https://picsum.photos/seed/ricardo/100/100", text: "Tasty and medicinal recipes. The anti-inflammatory green juice is my routine now." },
  { name: "sonia_maria", location: "New Jersey", rating: 5, img: "https://picsum.photos/seed/sonia/100/100", text: "I feel much more energetic. Constant pain was draining my energy, now I'm free." },
  { name: "paulo_h", location: "Hawaii", rating: 5, img: "https://picsum.photos/seed/paulo/100/100", text: "Very practical to have everything on the phone. I consult the recipes at the market." },
  { name: "juliana_m", location: "South Carolina", rating: 5, img: "https://picsum.photos/seed/juliana/100/100", text: "Gifted my mother and she loved it. She says the shoulder pains are gone." },
  { name: "marcos_vinicius", location: "New York", rating: 5, img: "https://picsum.photos/seed/marcos/100/100", text: "Cheap and efficient solution. No more spending rivers of money at the pharmacy." },
  { name: "teresa_b", location: "Alabama", rating: 5, img: "https://picsum.photos/seed/teresa/100/100", text: "The ginger compress is really hot! Works very well for muscle stiffness." },

  // Page 3 Fakes (Translated)
  { name: "andre_luiz", location: "Nevada", rating: 5, img: "https://picsum.photos/seed/andre/100/100", text: "Really liked the organization of the material. Everything straight to the point." },
  { name: "beatriz_c", location: "Maryland", rating: 5, img: "https://picsum.photos/seed/beatriz/100/100", text: "I'm in the third week and the results are consistent. Pain decreased gradually." },
  { name: "claudio_r", location: "Ohio", rating: 5, img: "https://picsum.photos/seed/claudio/100/100", text: "Never imagined turmeric and black pepper together were so powerful." },
  { name: "denise_s", location: "Indiana", rating: 5, img: "https://picsum.photos/seed/denise/100/100", text: "The quick start guide helped a lot. Started applying the same day." },
  { name: "eduardo_p", location: "Tennessee", rating: 5, img: "https://picsum.photos/seed/eduardo/100/100", text: "Excellent value for money. The shopping list bonus alone is worth it." },
  { name: "fabiana_l", location: "Kentucky", rating: 5, img: "https://picsum.photos/seed/fabiana/100/100", text: "Should have known this sooner. Would have saved my stomach from so many pills." },
  { name: "gabriel_m", location: "Missouri", rating: 5, img: "https://picsum.photos/seed/gabriel/100/100", text: "Easy to follow, even for those who don't cook much." },
  { name: "heloisa_t", location: "Wisconsin", rating: 5, img: "https://picsum.photos/seed/heloisa/100/100", text: "Wonderful. Shared with my walking group friends." },
  { name: "igor_k", location: "Oklahoma", rating: 5, img: "https://picsum.photos/seed/igor/100/100", text: "I feel my joints more lubricated and less stiff when waking up." },
  { name: "joana_d", location: "Connecticut", rating: 5, img: "https://picsum.photos/seed/joana/100/100", text: "Loved the tea recipes. Delicious and therapeutic." },

  // Page 4 Fakes (Translated)
  { name: "kleber_f", location: "Minnesota", rating: 5, img: "https://picsum.photos/seed/kleber/100/100", text: "Very good. Recommend for anyone with chronic pain." },
  { name: "lara_g", location: "Utah", rating: 5, img: "https://picsum.photos/seed/lara/100/100", text: "Quality and grounded information. Congratulations to the creators." },
  { name: "matheus_n", location: "Idaho", rating: 5, img: "https://picsum.photos/seed/matheus/100/100", text: "It really works. My grandma is using it and praised it a lot." },
  { name: "natalia_v", location: "Montana", rating: 5, img: "https://picsum.photos/seed/natalia/100/100", text: "Simply fantastic. Natural relief without secrets." },
  { name: "otavio_b", location: "Alaska", rating: 5, img: "https://picsum.photos/seed/otavio/100/100", text: "The best investment I made for my health this year." },
  { name: "pamela_x", location: "Kansas", rating: 5, img: "https://picsum.photos/seed/pamela/100/100", text: "Loved the cayenne pepper ointment recipe. Heats up and relieves instantly." },
  { name: "quiteria_z", location: "Arkansas", rating: 5, img: "https://picsum.photos/seed/quiteria/100/100", text: "Very satisfied with the purchase. Super fast digital delivery." },
  { name: "rafael_j", location: "Iowa", rating: 5, img: "https://picsum.photos/seed/rafael/100/100", text: "Rich and well-explained content. Worth reading the scientific part." },
  { name: "sabrina_q", location: "Nebraska", rating: 5, img: "https://picsum.photos/seed/sabrina/100/100", text: "My hands thank you. I can knit again." },
  { name: "thiago_w", location: "Vermont", rating: 5, img: "https://picsum.photos/seed/thiago/100/100", text: "Top! Fast and lasting results." }
];

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Set to 10 so all initial cited reviews fit on page 1

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentReviews = reviews.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Join 5,000+ People Living <span className="text-emerald-700">Pain Free</span>
          </h2>
          <div className="flex justify-center gap-1 text-gold mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="h-6 w-6" />)}
          </div>
          <p className="text-gray-600">Average Rating: 4.9/5 Stars</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mb-12">
          {currentReviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={review.img} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-emerald-100 flex-shrink-0"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-xs text-gray-500">{review.location}</p>
                </div>
                <div className="ml-auto flex text-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="h-3 w-3" />)}
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">"{review.text}"</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2">
          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`w-10 h-10 rounded-full font-bold transition-all ${
                currentPage === page
                  ? 'bg-emerald-900 text-white shadow-lg scale-110'
                  : 'bg-white text-gray-600 hover:bg-emerald-50 border border-gray-200'
              }`}
            >
              {page}
            </button>
          ))}
          <button 
             onClick={() => handlePageChange(Math.min(currentPage + 1, 4))}
             className="w-10 h-10 rounded-full bg-white text-gray-600 border border-gray-200 hover:bg-emerald-50 flex items-center justify-center transition"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

// --- Scientific Authority ---
const Science = () => {
  return (
    <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-gold font-bold tracking-wider uppercase text-sm">Proven By Science</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-6">Nature's Powerful Chemistry</h2>
            <p className="text-emerald-100 text-lg mb-8 leading-relaxed">
              This isn't "old wives' tales." It's biochemistry. Every recipe in the lab is selected based on the presence of powerful anti-inflammatory compounds.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-emerald-800 flex items-center justify-center flex-shrink-0 border border-emerald-700">
                  <span className="font-bold text-gold text-xl">C</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Curcumin</h3>
                  <p className="text-emerald-200">Found in Turmeric. Blocks NF-kB, a molecule that travels into the nuclei of your cells and turns on genes related to inflammation.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-emerald-800 flex items-center justify-center flex-shrink-0 border border-emerald-700">
                  <span className="font-bold text-gold text-xl">G</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Gingerol</h3>
                  <p className="text-emerald-200">The bioactive compound in fresh ginger. Has powerful medicinal properties and can inhibit the synthesis of pro-inflammatory cytokines.</p>
                </div>
              </div>

               <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-emerald-800 flex items-center justify-center flex-shrink-0 border border-emerald-700">
                  <span className="font-bold text-gold text-xl">A</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Anthocyanins</h3>
                  <p className="text-emerald-200">Found in red berries. These antioxidants fight oxidative stress and reduce inflammation markers in the blood.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="flex items-center justify-center mb-6">
                <FlaskConical className="h-24 w-24 text-gold opacity-80" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">The Lab Methodology</h3>
              <ul className="space-y-4 text-emerald-100">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-gold" />
                  <span>Bioavailability optimization (nutrient absorption)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-gold" />
                  <span>Synergistic pairing (combining foods for 10x effect)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-gold" />
                  <span>Correct dosage for therapeutic effect</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Pricing Section ---
const Pricing = () => {
  const [discountApplied, setDiscountApplied] = useState(false);

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Get Full Access Today
          </h2>
          <p className="text-gray-600 text-lg">One-time payment. Lifetime access. No monthly fees.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="bg-emerald-900 text-white text-center py-3 font-bold uppercase tracking-widest text-sm">
            Special Limited Time Offer
          </div>

          <div className="grid md:grid-cols-5">
            {/* Value Stack (Left Side) */}
            <div className="md:col-span-3 p-8 md:p-10 border-b md:border-b-0 md:border-r border-gray-100">
               <h3 className="text-2xl font-bold text-emerald-900 mb-6">Everything You Get:</h3>
               <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 p-1 rounded-full"><CheckCircle className="h-5 w-5 text-green-600" /></div>
                  <div>
                    <span className="font-bold text-gray-900">The Interactive Relief Dashboard</span>
                    <p className="text-sm text-gray-500">Immediate digital access.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 p-1 rounded-full"><CheckCircle className="h-5 w-5 text-green-600" /></div>
                  <div>
                    <span className="font-bold text-gray-900">35+ Proven Recipes</span>
                    <p className="text-sm text-gray-500">Solutions for every body area.</p>
                  </div>
                </li>
                 <li className="flex items-start gap-3">
                  <div className="bg-green-100 p-1 rounded-full"><CheckCircle className="h-5 w-5 text-green-600" /></div>
                  <div>
                    <span className="font-bold text-gray-900">Exclusive Bonuses (Shopping List + Guide)</span>
                    <p className="text-sm text-gray-500">Tools to make your journey easier.</p>
                  </div>
                </li>
                 <li className="flex items-start gap-3">
                  <div className="bg-green-100 p-1 rounded-full"><CheckCircle className="h-5 w-5 text-green-600" /></div>
                  <div>
                    <span className="font-bold text-gray-900">Lifetime Updates</span>
                    <p className="text-sm text-gray-500">Never pay for new recipes.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* CTA Action Area (Right Side) */}
            <div className="md:col-span-2 p-8 md:p-10 bg-gray-50 flex flex-col justify-center relative">
               
               {/* Pricing Display */}
               <div className="text-center mb-6">
                 <div className="text-gray-400 text-sm font-bold uppercase tracking-wide mb-1">Total Price</div>
                 <div className="flex items-center justify-center gap-3">
                    {discountApplied && (
                       <span className="text-2xl text-gray-400 line-through decoration-red-500 font-medium">$18.99</span>
                    )}
                    <span className="text-5xl font-extrabold text-emerald-900 tracking-tight">
                       ${discountApplied ? '14.99' : '18.99'}
                    </span>
                 </div>
               </div>

               {/* Discount Toggle Button */}
               <button 
                 onClick={() => setDiscountApplied(!discountApplied)}
                 className={`group flex items-center justify-center gap-2 mb-6 py-2 px-4 rounded-lg border-2 border-dashed transition-all duration-300 ${
                   discountApplied 
                     ? 'bg-green-100 border-green-500 text-green-700 cursor-default' 
                     : 'bg-white border-gold text-emerald-800 hover:bg-gold/10'
                 }`}
                 disabled={discountApplied}
               >
                  <TicketPercent className={`h-5 w-5 ${discountApplied ? 'text-green-600' : 'text-gold'}`} />
                  <span className="font-bold text-sm">
                    {discountApplied ? 'Discount Applied!' : 'Apply VIP Discount'}
                  </span>
               </button>

               {/* Main CTA */}
               <a 
                 href="https://pay.kiwify.com.br/Qa6Nkaz"
                 className="w-full bg-gold hover:bg-gold-hover text-emerald-900 font-bold py-4 px-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition duration-300 flex items-center justify-center gap-2 mb-4 animate-pulse-slow decoration-0 text-center"
               >
                 {discountApplied ? 'Buy with Discount' : 'Buy Now'}
                 <ArrowRight className="h-5 w-5" />
               </a>
               
               <p className="text-xs text-gray-400 text-center flex justify-center items-center gap-1">
                 <ShieldCheck className="h-3 w-3" /> Secure Payment & 60-Day Guarantee
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Guarantee Section ---
const Guarantee = () => {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="inline-block p-4 rounded-full bg-emerald-50 mb-6 border border-emerald-100">
          <ShieldCheck className="h-16 w-16 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">60-Day "Pain-Free Life" Guarantee</h3>
        <p className="text-gray-600 leading-relaxed">
          Try The Kitchen Cure: Joint Relief Lab for a full 60 days. Use the recipes, follow the plans, and feel the difference in your joints. If you are not completely amazed by the results, simply send an email to our support team and we will refund 100% of your money. No questions asked.
        </p>
      </div>
    </section>
  );
};

// --- FAQ Section ---
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Are the ingredients hard to find?",
      answer: "Not at all. Each recipe uses ingredients you can find at your local market or grocery store. Most cost less than $10."
    },
    {
      question: "Is this a physical or digital book?",
      answer: "This is a 100% digital product. You get immediate access to the online dashboard and downloadable PDFs right after purchase. You can access it on your phone, tablet, or computer."
    },
    {
      question: "I'm not tech-savvy. Is it easy to use?",
      answer: "Yes! We designed the 'Interactive Body Map' specifically for ease of use. If you can click a mouse or tap a screen, you can use the Lab. Plus, we included a simple PDF version you can print out."
    },
    {
      question: "Will this interfere with my current medication?",
      answer: "While these are natural food-based solutions, we always recommend showing the ingredient list to your doctor if you are taking prescription medication, just to be safe."
    },
    {
      question: "How long does it take to see results?",
      answer: "Many users report feeling relief minutes after applying our topical ointments. For internal inflammation (smoothies/teas), most people feel a significant difference within 3 to 7 days of consistent use."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-emerald-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-heading font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-emerald-100 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-bold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-emerald-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 bg-emerald-50/50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Footer ---
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <FlaskConical className="h-6 w-6 text-emerald-500" />
              <span className="font-heading font-bold text-white text-lg">The Kitchen Cure</span>
            </div>
            <p className="text-sm max-w-xs">
              Empowering you to take control of your joint health using science-backed natural remedies.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-500">Home</a></li>
              <li><a href="#problem" className="hover:text-emerald-500">About</a></li>
              <li><a href="#pricing" className="hover:text-emerald-500">Pricing</a></li>
              <li><a href="#faq" className="hover:text-emerald-500">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-500">Terms of Use</a></li>
              <li><a href="#" className="hover:text-emerald-500">Disclaimer</a></li>
              <li><a href="#" className="hover:text-emerald-500">Support</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} The Kitchen Cure. All rights reserved.</p>
          <p className="mt-2 text-gray-500">
            Disclaimer: The content provided on this website is for informational purposes only and is not intended to substitute professional medical advice, diagnosis, or treatment.
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---
const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header />
      <main>
        <Hero />
        <Testimonials />
        <Problem />
        <Solution />
        <Science />
        <Pricing />
        <Guarantee />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;