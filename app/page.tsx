"use client";

import { motion } from "framer-motion";
import {
  ArrowRight, BookOpen, CheckCircle2, Clock3, GraduationCap,
  Laptop, MapPin, MessageCircle, Phone, Star, Users, Sparkles
} from "lucide-react";

const subjects = [
  "English", "Mathematics", "Science", "Hindi",
  "Social Studies", "Computer Basics", "Homework Support", "Exam Preparation"
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } }
};

export default function Home() {
  const whatsapp = "https://wa.me/9560762187";

  return (
    <main>
      <nav className="nav">
        <a href="#" className="brand">
          <span className="brandIcon"><GraduationCap size={22} /></span>
          <span>BrightPath <b>Tuition</b></span>
        </a>
        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#classes">Classes</a>
          <a href="#subjects">Subjects</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="navButton" href={whatsapp} target="_blank" rel="noreferrer">
          Enquire Now <ArrowRight size={16} />
        </a>
      </nav>

      <section className="hero">
        <div className="orb orbOne" />
        <div className="orb orbTwo" />
        <motion.div
          className="heroCopy"
          initial="hidden" animate="visible" 
        >
          <div className="eyebrow"><Sparkles size={15} /> Learning made simple</div>
          <h1>Helping young minds <span>learn with confidence.</span></h1>
          <p>
            Friendly, personalised tuition for Primary and Middle School students,
            with online classes and comfortable in-person learning at home.
          </p>
          <div className="heroActions">
            <a className="primaryButton" href={whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle size={18} /> Book a Free Enquiry
            </a>
            <a className="textButton" href="#classes">Explore Classes <ArrowRight size={17} /></a>
          </div>
          <div className="miniTrust">
            <div><CheckCircle2 size={17} /> Personal attention</div>
            <div><CheckCircle2 size={17} /> Flexible batches</div>
          </div>
        </motion.div>

        <motion.div
          className="heroCardWrap"
          initial={{ opacity: 0, scale: .9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: .8, delay: .15 }}
        >
          <div className="heroCard">
            <div className="cardTop">
              <span className="roundIcon"><BookOpen size={21} /></span>
              <span className="status"><span /> Admissions Open</span>
            </div>
            <div className="teacherPlaceholder">
              <div className="avatar"><GraduationCap size={48} /></div>
              <p>Dedicated Tutor</p>
              <small>Primary & Middle School</small>
            </div>
            <div className="cardStats">
              <div><b>1–5</b><span>Primary</span></div>
              <div><b>6–8</b><span>Middle</span></div>
              <div><b>2</b><span>Modes</span></div>
            </div>
          </div>
          <div className="floatBadge badgeOne"><Star size={16} fill="currentColor" /> Caring & patient</div>
          <div className="floatBadge badgeTwo"><Users size={16} /> Small groups</div>
        </motion.div>
      </section>

      <section className="quickStrip">
        <div><Laptop /><span><b>Online Classes</b><small>Learn from anywhere</small></span></div>
        <div><MapPin /><span><b>At-Home Classes</b><small>Student comes to tutor's place</small></span></div>
        <div><Clock3 /><span><b>Flexible Timings</b><small>Sessions around your schedule</small></span></div>
      </section>

      <section id="about" className="section about">
        <motion.div whileInView="visible" viewport={{ once: true, amount: .2 }} >
          <div className="sectionLabel">ABOUT THE TUITION</div>
          <h2>A calm space to ask questions, practise, and grow.</h2>
          <p>
            Every child learns differently. The goal is to make concepts clear,
            build strong basics, and help students become independent learners —
            without unnecessary pressure.
          </p>
          <div className="featureGrid">
            <div><span><CheckCircle2 /></span><b>Concept-first learning</b><p>Understand the “why”, not just memorise answers.</p></div>
            <div><span><CheckCircle2 /></span><b>Regular practice</b><p>Short activities and revision to strengthen learning.</p></div>
            <div><span><CheckCircle2 /></span><b>Individual attention</b><p>Teaching pace adjusted to each student's needs.</p></div>
            <div><span><CheckCircle2 /></span><b>Parent updates</b><p>Simple feedback on progress and areas to improve.</p></div>
          </div>
        </motion.div>
      </section>

      <section id="classes" className="section light">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: .15 }} >
          <div className="sectionLabel">CLASSES</div>
          <h2>Support for every stage of early learning.</h2>
          <div className="classGrid">
            <article className="classCard primary">
              <div className="classNumber">01</div>
              <h3>Primary</h3>
              <p>Classes 1–5</p>
              <ul><li>Strong fundamentals</li><li>Homework & school support</li><li>Reading and writing practice</li><li>Fun, activity-based learning</li></ul>
            </article>
            <article className="classCard middle">
              <div className="classNumber">02</div>
              <h3>Middle School</h3>
              <p>Classes 6–8</p>
              <ul><li>Concept clarity</li><li>Problem-solving skills</li><li>Test & exam preparation</li><li>Study habits and confidence</li></ul>
            </article>
          </div>
        </motion.div>
      </section>

      <section id="subjects" className="section">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: .15 }} >
          <div className="sectionLabel">SUBJECTS</div>
          <h2>All the core subjects students need.</h2>
          <p className="sectionIntro">Subjects can be adjusted according to the student's class, school syllabus, and learning goals.</p>
          <div className="subjectGrid">
            {subjects.map((subject, i) => (
              <motion.div key={subject} className="subject"
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * .05 }}>
                <CheckCircle2 size={19} /> {subject}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="ctaSection">
        <div className="ctaGlow" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} >
          <div className="sectionLabel lightLabel">READY TO START?</div>
          <h2>Let's make learning feel easier.</h2>
          <p>Get in touch to discuss your child's class, subjects, and preferred learning mode.</p>
          <a className="whiteButton" href={whatsapp} target="_blank" rel="noreferrer">
            <MessageCircle size={18} /> WhatsApp for Enquiry
          </a>
        </motion.div>
      </section>

      <section id="contact" className="section contact">
        <div>
          <div className="sectionLabel">CONTACT</div>
          <h2>Have a question? Let's talk.</h2>
          <p>Replace the details below with your sister's real contact information before publishing.</p>
        </div>
        <div className="contactCards">
          <a href="tel:+919560762187"><Phone /><span><small>Call</small><b>+91 9560762187</b></span></a>
          <a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle /><span><small>WhatsApp</small><b>Send an enquiry</b></span></a>
          <div><MapPin /><span><small>Location</small><b>Your locality, India</b></span></div>
        </div>
      </section>

      <footer>
        <div className="brand"><span className="brandIcon"><GraduationCap size={20} /></span><span>BrightPath <b>Tuition</b></span></div>
        <p>© 2026 BrightPath Tuition. All rights reserved.</p>
      </footer>
    </main>
  );
}