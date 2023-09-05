import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';

const Tech = () => {
  return (
    <>
     <div className='flex flex-row justify-center  mb-10 flex-wrap '>
     <motion.div variants={textVariant()}>
        <h4 className={styles.heroSubText}>Tech I Know</h4>
      </motion.div>
     </div>
    <div className='flex flex-row justify-center gap-20 flex-wrap'>
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech, "");