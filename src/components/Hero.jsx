import { Box, Container, Stack, Typography, Button } from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import { motion } from 'framer-motion'
import { profile } from '../data/content'

const ease = [0.22, 1, 0.36, 1]

// Headline split so words can rise independently, feels typeset, not stamped out.
const line1 = ['Full-stack', 'engineer']
const line2 = ['who', 'ships', 'the', 'whole', 'thing.']

export default function Hero() {
  return (
    <Box
      id="top"
      component="section"
      sx={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 14, md: 10 },
        overflow: 'hidden',
      }}
    >
      {/* Soft coral glow, off-centre so the layout feels asymmetric / hand-placed */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease }}
        sx={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: { xs: 360, md: 640 },
          height: { xs: 360, md: 640 },
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(255,111,91,0.18) 0%, rgba(255,111,91,0) 65%)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-15%',
          left: '-10%',
          width: 520,
          height: 520,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(143,227,200,0.08) 0%, rgba(143,227,200,0) 65%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
        >
          <Stack direction="row" spacing={1.2} alignItems="center" sx={{ mb: 3 }}>
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: 'secondary.main',
                boxShadow: '0 0 12px rgba(143,227,200,0.8)',
              }}
            />
            <Typography
              sx={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 13,
                color: 'text.secondary',
                letterSpacing: '0.04em',
              }}
            >
              {profile.location} · available for work
            </Typography>
          </Stack>
        </motion.div>

        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: 44, sm: 64, md: 92 },
            maxWidth: 1000,
          }}
        >
          {[line1, line2].map((line, li) => (
            <Box
              key={li}
              sx={{ display: 'block', overflow: 'hidden', py: '0.04em' }}
            >
              {line.map((word, wi) => (
                <Box
                  key={wi}
                  component={motion.span}
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease,
                    delay: 0.25 + li * 0.12 + wi * 0.05,
                  }}
                  sx={{ display: 'inline-block', mr: '0.28em' }}
                >
                  {/* The single coral word carries the personality */}
                  {word === 'whole' ? (
                    <Box
                      component="em"
                      sx={{ color: 'primary.main', fontStyle: 'italic' }}
                    >
                      {word}
                    </Box>
                  ) : (
                    word
                  )}
                </Box>
              ))}
            </Box>
          ))}
        </Typography>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.7 }}
        >
          <Typography
            sx={{
              mt: 4,
              maxWidth: 560,
              color: 'text.secondary',
              fontSize: { xs: 16, md: 18 },
            }}
          >
            I'm {profile.name}, a MERN-stack developer with{' '}
            {profile.yearsExperience}+ years shipping production web apps. React and
            Next on the front, Node, Nest and Express on the back, MongoDB and Postgres
            underneath, and the cloud that keeps it running.
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ mt: 5 }}
          >
            <Button
              href="#work"
              variant="contained"
              size="large"
              endIcon={<ArrowOutwardIcon />}
              sx={{
                bgcolor: 'primary.main',
                color: '#0e0e10',
                '&:hover': { bgcolor: '#ff8472' },
              }}
            >
              See my work
            </Button>
            <Button
              href={`mailto:${profile.email}`}
              variant="text"
              size="large"
              sx={{ color: 'text.primary', '&:hover': { color: 'primary.main' } }}
            >
              Get in touch
            </Button>
          </Stack>

          <Stack
            direction="row"
            spacing={{ xs: 4, md: 7 }}
            sx={{ mt: { xs: 7, md: 10 }, flexWrap: 'wrap', rowGap: 3 }}
          >
            {profile.stats.map((s) => (
              <Box key={s.label}>
                <Typography
                  variant="h3"
                  sx={{ fontSize: { xs: 26, md: 34 }, color: 'text.primary' }}
                >
                  {s.value}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 13,
                    color: 'text.secondary',
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {s.label}
                </Typography>
              </Box>
            ))}
          </Stack>
        </motion.div>
      </Container>

      {/* Scroll cue */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        sx={{
          position: 'absolute',
          bottom: 28,
          left: '50%',
          transform: 'translateX(-50%)',
          display: { xs: 'none', md: 'block' },
        }}
      >
        <Box
          component={motion.div}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          sx={{
            width: 24,
            height: 38,
            borderRadius: 12,
            border: '1.5px solid rgba(255,255,255,0.2)',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 8,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 4,
              height: 8,
              borderRadius: 4,
              bgcolor: 'primary.main',
            },
          }}
        />
      </Box>
    </Box>
  )
}
