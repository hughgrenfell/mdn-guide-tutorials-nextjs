'use client'

import Image from 'next/image';
import aliceIcon from '../../../../../public/images/alice.svg';
import style from '../alicestyle.module.css';
import { motion } from 'framer-motion';

export default function SpinningAlice() {

    return (
        <>
            <div className={style.container}>
                <motion.div 
                    id={style.alice1}
                    animate={{
                        rotate: 720,
                        scale: 0
                    }}
                    transition={{
                        delay: 1,
                        duration: 3
                    }}
                >    
                    <Image
                        priority
                        src={aliceIcon}
                        height={256}
                        width={256}
                        alt="image of Alice silhouette spinning"
                    />
                </motion.div>
                <motion.div 
                    id={style.alice2}
                    animate={{
                        rotate: 720,
                        scale: 0
                    }}
                    transition={{
                        delay: 4,
                        duration: 3
                    }}
                >    
                    <Image
                        priority
                        src={aliceIcon}
                        height={256}
                        width={256}
                        alt="image of Alice silhouette spinning"
                    />
                </motion.div>
                <motion.div 
                    id={style.alice3}
                    animate={{
                        rotate: 720,
                        scale: 0
                    }}
                    transition={{
                        delay: 7,
                        duration: 3
                    }}
                >    
                    <Image
                        priority
                        src={aliceIcon}
                        height={256}
                        width={256}
                        alt="image of Alice silhouette spinning"
                    />
                </motion.div>
            </div>
        </>

    )
}