'use client'

import { AnimatePresence, motion } from 'framer-motion'

export default function ChaneMotion({
  children,
  pathname,
  categoryDetails,
}: {
  children: React.ReactNode
  pathname: string
  categoryDetails: CategoryDetail
}) {
  return (
    <AnimatePresence>
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          backgroundColor: categoryDetails.backgroundColor,
          color: categoryDetails.pointColor,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
