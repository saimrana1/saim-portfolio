import { Box, Container, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from './motion'

// A consistent section wrapper: small index label + serif heading.
export default function Section({ id, index, title, children, maxWidth = 'lg', sx }) {
  return (
    <Box
      component="section"
      id={id}
      sx={{ py: { xs: 9, md: 16 }, position: 'relative', ...sx }}
    >
      <Container maxWidth={maxWidth}>
        {title && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 2,
                mb: { xs: 4, md: 6 },
              }}
            >
              {index && (
                <Typography
                  sx={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 13,
                    color: 'primary.main',
                    letterSpacing: '0.1em',
                  }}
                >
                  {index}
                </Typography>
              )}
              <Typography variant="h2" sx={{ fontSize: { xs: 32, md: 46 } }}>
                {title}
              </Typography>
            </Box>
          </motion.div>
        )}
        {children}
      </Container>
    </Box>
  )
}
