import { motion } from "framer-motion";
import './Hero.scss';

const  Hero = () => {
    return (
        <section  className="hero">
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                elmstreetLabs
            </motion.h1>
            <div className="hero-content">
                <p> build towards your fears </p>
            </div>
        </section>
    );
}

export default Hero;