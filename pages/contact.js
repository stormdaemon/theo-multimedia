import { motion } from 'framer-motion';
import { Emoji } from 'react-apple-emojis';

import { useForm, ValidationError } from '@formspree/react';
import { useState, useEffect } from 'react';
import Head from 'next/head';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ContactPage = () => {
  const [state, handleSubmit] = useForm("mblypyew");
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      // Animation de confettis simple et professionnelle
      setTimeout(() => {
        setShowConfetti(true);
      }, 500);
      
      setTimeout(() => {
        setShowConfetti(false);
      }, 8000);
    }
  }, [state.succeeded]);

  if (state.succeeded) {
    return (
      <>
        <Head>
          <title>Message envoyé ! | Théo Multimédia</title>
        </Head>
        <div className="fixed inset-0 flex items-center justify-center bg-background/95 backdrop-blur-sm z-50 overflow-hidden">

          
          {/* Explosion de confettis spectaculaire */}
           <motion.div 
             className="absolute inset-0 pointer-events-none overflow-hidden"
             initial={{ opacity: 0 }}
             animate={{ opacity: showConfetti ? 1 : 0 }}
             exit={{ opacity: 0, transition: { duration: 2 } }}
             transition={{ duration: 1 }}
           >
             {showConfetti && (
               <>
                 {/* Confettis principaux */}
                 {[...Array(100)].map((_, i) => {
                   const colors = [
                     'bg-gradient-to-br from-red-400 to-red-600',
                     'bg-gradient-to-br from-blue-400 to-blue-600', 
                     'bg-gradient-to-br from-green-400 to-green-600',
                     'bg-gradient-to-br from-yellow-400 to-yellow-600',
                     'bg-gradient-to-br from-purple-400 to-purple-600',
                     'bg-gradient-to-br from-pink-400 to-pink-600',
                     'bg-gradient-to-br from-indigo-400 to-indigo-600',
                     'bg-gradient-to-br from-orange-400 to-orange-600',
                     'bg-gradient-to-br from-teal-400 to-teal-600',
                     'bg-gradient-to-br from-cyan-400 to-cyan-600'
                   ];
                   const shapes = ['rounded-full', 'rounded-lg', 'rounded-sm', ''];
                   const sizes = ['w-2 h-2', 'w-3 h-3', 'w-4 h-4', 'w-1 h-6', 'w-6 h-1', 'w-2 h-4'];
                   
                   const startX = Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200);
                   const endX = startX + (Math.random() - 0.5) * 400;
                   
                   return (
                     <motion.div
                       key={i}
                       initial={{ 
                         y: -100, 
                         x: startX,
                         rotate: 0,
                         scale: 0,
                         opacity: 0
                       }}
                       animate={{ 
                         y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 300,
                         x: endX,
                         rotate: [0, 180, 360, 540, 720],
                         scale: [0, 1.2, 1, 0.8, 0.3],
                         opacity: [0, 1, 1, 0.7, 0]
                       }}
                       exit={{ 
                         opacity: 0,
                         scale: 0,
                         y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 100,
                         transition: { duration: 2, ease: "easeOut" }
                       }}
                       transition={{ 
                          duration: 4 + Math.random() * 2,
                          ease: [0.25, 0.46, 0.45, 0.94],
                          delay: Math.random() * 1,
                          times: [0, 0.2, 0.6, 0.9, 1]
                        }}
                       className={`absolute ${
                         colors[Math.floor(Math.random() * colors.length)]
                       } ${
                         shapes[Math.floor(Math.random() * shapes.length)]
                       } ${
                         sizes[Math.floor(Math.random() * sizes.length)]
                       } shadow-xl`}
                       style={{
                         filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.4)) brightness(1.1)',
                         zIndex: 25
                       }}
                     />
                   );
                 })}
                 
                 {/* Étoiles scintillantes */}
                 {[...Array(30)].map((_, i) => (
                   <motion.div
                     key={`star-${i}`}
                     initial={{
                       opacity: 0,
                       scale: 0,
                       x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                       y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)
                     }}
                     animate={{
                       opacity: [0, 1, 0],
                       scale: [0, 1.5, 0],
                       rotate: [0, 360]
                     }}
                     transition={{
                        duration: 2,
                        delay: Math.random() * 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                     className="absolute w-1 h-1 bg-yellow-300 rounded-full"
                     style={{
                       filter: 'drop-shadow(0 0 4px #fbbf24)',
                       zIndex: 26
                     }}
                   >
                     <div className="absolute inset-0 bg-yellow-300 rounded-full animate-ping" />
                   </motion.div>
                 ))}
               </>
             )}
           </motion.div>
          
          {/* Message de succès avec animation d'entrée spectaculaire */}
           <motion.div
             initial={{ scale: 0, opacity: 0, y: 100, rotateX: -90 }}
             animate={{ 
               scale: [0, 1.1, 1], 
               opacity: 1, 
               y: 0, 
               rotateX: 0
             }}
             exit={{ 
               scale: 0.8, 
               opacity: 0, 
               y: -50,
               rotateX: 90,
               transition: { duration: 1.5, ease: "easeInOut" }
             }}
             transition={{ 
                delay: 4.2, 
                duration: 0.8, 
                type: "spring",
                stiffness: 200,
                damping: 20,
                times: [0, 0.7, 1]
              }}
             className="text-center bg-gradient-to-br from-card via-card to-card/90 p-12 rounded-3xl border border-border shadow-2xl max-w-lg mx-4 backdrop-blur-lg relative overflow-hidden"
             style={{
               background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
               backdropFilter: 'blur(20px)',
               zIndex: 40
             }}
           >
             {/* Effet de brillance */}
             <motion.div
               animate={{
                 x: [-100, 400],
                 opacity: [0, 0.3, 0]
               }}
               transition={{
                  duration: 1.5,
                  delay: 2.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut"
                }}
               className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
             />
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ 
                scale: [0, 1.2, 1],
                rotate: [0, 360, 0]
              }}
              transition={{ 
                delay: 2, 
                duration: 1, 
                type: "spring",
                stiffness: 300,
                times: [0, 0.6, 1]
              }}
              className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1.1, 1],
                  opacity: 1
                }}
                transition={{ delay: 2.5, duration: 0.5 }}
                className="text-5xl filter drop-shadow-sm"
              >
                <Emoji name="rocket" width={60} />
              </motion.div>
            </motion.div>
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                delay: 3, 
                duration: 0.6,
                type: "spring",
                stiffness: 200
              }}
              className="text-3xl font-bold text-foreground mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"
            >
              Message envoyé !
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                delay: 3.3, 
                duration: 0.5,
                ease: "easeOut"
              }}
              className="text-muted-foreground mb-8 leading-relaxed"
            >
              Merci pour votre message ! Je vous répondrai dans les plus brefs délais.
            </motion.p>
            <motion.button
               initial={{ y: 30, opacity: 0, scale: 0.7, rotateY: -180 }}
               animate={{ 
                 y: 0, 
                 opacity: 1, 
                 scale: 1,
                 rotateY: 0
               }}
               whileHover={{ 
                 scale: 1.08,
                 y: -2,
                 boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                 background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4)",
                 backgroundSize: "200% 200%",
                 transition: { duration: 0.3 }
               }}
               whileTap={{ 
                 scale: 0.95,
                 y: 0,
                 transition: { duration: 0.1 }
               }}
               transition={{ 
                 delay: 3.5, 
                 duration: 0.6,
                 type: "spring",
                 stiffness: 250,
                 damping: 18
               }}
               onClick={() => {
                 // Animation de sortie spectaculaire
                 const timer = setTimeout(() => {
                   window.location.reload();
                 }, 800);
                 return () => clearTimeout(timer);
               }}
               className="relative bg-gradient-to-r from-accent via-blue-600 to-purple-600 text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-500 shadow-xl hover:shadow-2xl transform overflow-hidden group"
               style={{
                 background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                 backgroundSize: '200% 200%',
                 animation: 'gradient 3s ease infinite'
               }}
             >
               {/* Effet de vague au survol */}
               <motion.div
                 className="absolute inset-0 bg-white/20 rounded-2xl"
                 initial={{ scale: 0, opacity: 0 }}
                 whileHover={{
                   scale: 1,
                   opacity: [0, 0.3, 0],
                   transition: { duration: 0.6 }
                 }}
               />
               
               {/* Particules flottantes */}
               {[...Array(6)].map((_, i) => (
                 <motion.div
                   key={i}
                   className="absolute w-1 h-1 bg-white/60 rounded-full"
                   animate={{
                     y: [0, -20, 0],
                     x: [0, Math.random() * 20 - 10, 0],
                     opacity: [0, 1, 0]
                   }}
                   transition={{
                     duration: 2,
                     delay: i * 0.3,
                     repeat: Infinity,
                     ease: "easeInOut"
                   }}
                   style={{
                     left: `${20 + i * 12}%`,
                     top: '50%'
                   }}
                 />
               ))}
               
               <span className="relative z-10 flex items-center gap-2">
                 <motion.span
                   animate={{
                     rotate: [0, 360]
                   }}
                   transition={{
                     duration: 2,
                     repeat: Infinity,
                     ease: "linear"
                   }}
                 >
                   ✨
                 </motion.span>
                 Envoyer un autre message
                 <motion.span
                   animate={{
                     x: [0, 5, 0]
                   }}
                   transition={{
                     duration: 1.5,
                     repeat: Infinity,
                     ease: "easeInOut"
                   }}
                 >
                   →
                 </motion.span>
               </span>
             </motion.button>
             
             <style jsx>{`
               @keyframes gradient {
                 0% { background-position: 0% 50%; }
                 50% { background-position: 100% 50%; }
                 100% { background-position: 0% 50%; }
               }
             `}</style>
          </motion.div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Contact | Théo Multimédia - Devis Gratuit Angoulême</title>
        <meta name="description" content="Contactez Théo Multimédia Angoulême pour votre projet web. Devis gratuit création sites internet, SEO et solutions digitales." />

        <meta name="author" content="Théo LAFONT" />
        <meta property="og:title" content="Contact | Théo Multimédia - Devis Gratuit Angoulême" />
        <meta property="og:description" content="Contactez Théo Multimédia à Angoulême pour votre projet web. Devis gratuit pour création de sites internet, SEO et solutions digitales sur-mesure." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.theomultimedia.com/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact | Théo Multimédia - Devis Gratuit Angoulême" />
        <meta name="twitter:description" content="Contactez Théo Multimédia à Angoulême pour votre projet web. Devis gratuit pour création de sites internet, SEO et solutions digitales sur-mesure." />
        <meta name="twitter:image" content="https://www.theomultimedia.com/og-contact.jpg" />
        <meta name="ai-summary" content="Contact direct avec Théo Multimédia : échange, devis, conseils personnalisés pour votre projet web ou digital." />
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Théo Multimédia",
          "author": {
            "@type": "Person",
            "name": "Théo LAFONT"
          },
          "description": "Contact direct avec Théo Multimédia : échange, devis, conseils personnalisés pour votre projet web ou digital.",
          "inLanguage": "fr-FR"
        }
        `}</script>
      </Head>
      <motion.div
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0 }}
        variants={containerVariants}
        className="container mx-auto px-4 py-24"
      >
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold text-center text-foreground mb-4">
          Contactez <span className="text-accent"> Théo Multimédia,agence web à Angoulême</span>
        </motion.h1>
        <motion.p variants={itemVariants} className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
          Besoin d’un site internet, d’un webdesign sur-mesure, d’un accompagnement SEO, d’un branding ou d’une refonte digitale à Angoulême ? Contactez Théo Multimédia : devis gratuit, conseils personnalisés et réponse rapide pour booster votre visibilité, votre performance et votre présence en ligne.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.form 
            variants={itemVariants} 
            className="flex flex-col space-y-6 bg-card rounded-2xl p-8 border border-border"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Votre nom</label>
              <input 
                id="name"
                name="name"
                type="text" 
                required
                className="w-full bg-background border border-input rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all" 
              />
              <ValidationError 
                prefix="Nom" 
                field="name"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Votre email</label>
              <input 
                id="email"
                name="email"
                type="email" 
                required
                className="w-full bg-background border border-input rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all" 
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">Sujet</label>
              <input 
                id="subject"
                name="subject"
                type="text" 
                className="w-full bg-background border border-input rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all" 
              />
              <ValidationError 
                prefix="Sujet" 
                field="subject"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>
          
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Votre message</label>
              <textarea 
                id="message"
                name="message"
                placeholder="Décrivez votre projet ou posez-moi vos questions..." 
                rows="5" 
                required
                className="w-full bg-background border border-input rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all"
              ></textarea>
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>
            
            <motion.button 
              type="submit"
              disabled={state.submitting}
              whileHover={{ 
                scale: state.submitting ? 1 : 1.02,
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: state.submitting ? 1 : 0.98 }}
              className={`relative font-semibold py-4 px-8 rounded-xl self-start transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2 overflow-hidden group ${
                state.submitting 
                  ? 'bg-gradient-to-r from-accent to-blue-600 text-white cursor-not-allowed' 
                  : 'bg-gradient-to-r from-accent to-blue-600 hover:from-accent/90 hover:to-blue-700 text-white'
              }`}
              style={{
                background: state.submitting ? 'linear-gradient(45deg, #3b82f6, #8b5cf6)' : undefined,
                backgroundSize: '200% 200%',
                animation: state.submitting ? 'pulse-gradient 2s ease-in-out infinite' : undefined
              }}
            >
              {/* Effet de vague pendant l'envoi */}
              {state.submitting && (
                <motion.div
                  className="absolute inset-0 bg-white/10"
                  animate={{
                    x: [-100, 400],
                    opacity: [0, 0.5, 0]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              )}
              
              {/* Particules flottantes pendant l'envoi */}
              {state.submitting && [...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white/60 rounded-full"
                  animate={{
                    y: [0, -30, 0],
                    x: [0, (Math.random() - 0.5) * 40, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    left: `${10 + i * 10}%`,
                    top: '50%'
                  }}
                />
              ))}
              
              {/* Icône et texte */}
              <span className="relative z-10 flex items-center gap-3">
                {state.submitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                    <motion.span
                      animate={{
                        opacity: [1, 0.7, 1]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      Envoi en cours...
                    </motion.span>
                  </>
                ) : (
                  <>
                    <motion.span
                      whileHover={{
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      ✉️
                    </motion.span>
                    Envoyer le message
                    <motion.span
                      animate={{
                        x: [0, 3, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      →
                    </motion.span>
                  </>
                )}
              </span>
              
              <style jsx>{`
                @keyframes pulse-gradient {
                  0%, 100% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                }
              `}</style>
            </motion.button>
            
            <ValidationError 
              errors={state.errors}
              className="text-red-500 text-sm"
            />
          </motion.form>

        <motion.div variants={itemVariants} className="flex flex-col justify-center space-y-8">
          <div className="bg-card p-6 rounded-2xl border border-border">
            <h2 className="text-xl font-semibold text-foreground mb-6">Mes informations de contact</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-xl text-accent">
                  <Emoji name="e-mail" width={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Email</p>
                  <a href="mailto:contact@theo-multimedia.com" className="text-foreground hover:text-accent transition-colors">contact@theo-multimedia.com</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-xl text-accent">
                  <Emoji name="telephone-receiver" width={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Téléphone</p>
                  <a href="tel:+3376851695" className="text-foreground hover:text-accent transition-colors">+33 7 68 51 95 16</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-xl text-accent">
                  <Emoji name="round-pushpin" width={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Adresse</p>
                  <p className="text-foreground">16000 Angoulême, France</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-2xl border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4">Horaires d'ouverture</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Lundi - Vendredi</span>
                <span className="font-medium text-foreground">09h00 - 18h00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Samedi</span>
                <span className="font-medium text-foreground">10h00 - 15h00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Dimanche</span>
                <span className="font-medium text-foreground">Fermé</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
    </>
  );
};

export default ContactPage;
