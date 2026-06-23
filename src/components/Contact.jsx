import { Box, Container, Typography, Button, Stack, Link } from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from './motion'
import { profile } from '../data/content'

const socialLinks = [
  { label: 'GitHub', href: profile.socials.github },
  { label: 'LinkedIn', href: profile.socials.linkedin },
  { label: 'Twitter', href: profile.socials.twitter },
]

export default function Contact() {
  return (
    <Box
      component="section"
      id="contact"
      sx={{ py: { xs: 12, md: 22 }, position: 'relative', overflow: 'hidden' }}
    >
      <Box
        sx={{
          position: 'absolute',
          bottom: '-30%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 800,
          height: 800,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(255,111,91,0.12) 0%, rgba(255,111,91,0) 60%)',
          pointerEvents: 'none',
        }}
      />
      <Container maxWidth="md" sx={{ position: 'relative', textAlign: 'center' }}>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUp}>
            <Typography
              sx={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 13,
                color: 'primary.main',
                letterSpacing: '0.1em',
                mb: 2,
              }}
            >
              04 · Contact
            </Typography>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: 38, md: 68 }, mb: 3 }}
            >
              Let's build something
              <br />
              <Box component="em" sx={{ color: 'primary.main', fontStyle: 'italic' }}>
                worth shipping.
              </Box>
            </Typography>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Typography
              sx={{
                color: 'text.secondary',
                fontSize: 18,
                maxWidth: 520,
                mx: 'auto',
                mb: 5,
              }}
            >
              I'm open to full-stack roles and freelance projects. If you need
              someone who can take a product from idea to production and own it, let's
              talk.
            </Typography>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Button
              href={`mailto:${profile.email}`}
              variant="contained"
              size="large"
              endIcon={<ArrowOutwardIcon />}
              sx={{
                bgcolor: 'primary.main',
                color: '#0e0e10',
                fontSize: 17,
                px: 4,
                py: 1.5,
                '&:hover': { bgcolor: '#ff8472' },
              }}
            >
              {profile.email}
            </Button>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Stack
              direction="row"
              spacing={3}
              justifyContent="center"
              sx={{ mt: 5 }}
            >
              {socialLinks.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  sx={{
                    color: 'text.secondary',
                    fontSize: 14,
                    fontWeight: 500,
                    position: 'relative',
                    transition: 'color .2s ease',
                    '&:hover': { color: 'text.primary' },
                  }}
                >
                  {s.label}
                </Link>
              ))}
            </Stack>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  )
}
