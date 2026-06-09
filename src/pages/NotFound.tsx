import { motion } from 'framer-motion';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-8xl md:text-9xl font-bold text-[#caa96a]/20 mb-8">404</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Page Not Found</h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button to="/" variant="primary">
            Return Home
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
