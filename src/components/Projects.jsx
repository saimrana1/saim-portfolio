import { useState } from 'react'
import { Box, Grid, Typography, Stack, Chip, Link } from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import CheckIcon from '@mui/icons-material/Check'
import { motion } from 'framer-motion'
import Section from './Section'
import { fadeUp, viewportOnce } from './motion'
import { projects } from '../data/content'

function ProjectRow({ project, idx }) {
  const flip = idx % 2 === 1
  const num = String(idx + 1).padStart(2, '0')
  // If a live screenshot fails to load (blocked / auth-walled), fall back gracefully.
  const [imgFailed, setImgFailed] = useState(false)
  const showImage = Boolean(project.image) && !imgFailed

  return (
    <Box
      component={motion.div}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      sx={{
        py: { xs: 6, md: 9 },
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Grid
        container
        spacing={{ xs: 4, md: 8 }}
        alignItems="center"
        direction={{ xs: 'column', md: flip ? 'row-reverse' : 'row' }}
      >
        {/* Visual panel: a stylised browser frame, no external images needed */}
        <Grid item xs={12} md={6}>
          <Box
            component={motion.a}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            whileHover="hover"
            initial="rest"
            animate="rest"
            sx={{ display: 'block', perspective: 1000 }}
          >
            <Box
              component={motion.div}
              variants={{
                rest: { rotateX: 0, rotateY: 0, y: 0 },
                hover: { rotateX: 4, rotateY: flip ? 6 : -6, y: -6 },
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              sx={{
                position: 'relative',
                borderRadius: 4,
                overflow: 'hidden',
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.paper',
                aspectRatio: { xs: '4 / 3', md: '16 / 11' },
                boxShadow: '0 30px 60px -30px rgba(0,0,0,0.7)',
              }}
            >
              {/* Browser chrome */}
              <Stack
                direction="row"
                spacing={0.8}
                sx={{
                  px: 2,
                  height: 38,
                  alignItems: 'center',
                  borderBottom: '1px solid',
                  borderColor: 'divider',
                  bgcolor: 'rgba(255,255,255,0.02)',
                }}
              >
                {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
                  <Box
                    key={c}
                    sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: c }}
                  />
                ))}
                <Box
                  sx={{
                    ml: 1.5,
                    px: 1.5,
                    py: 0.3,
                    borderRadius: 1,
                    bgcolor: 'rgba(255,255,255,0.04)',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    color: 'text.secondary',
                  }}
                >
                  {project.url.replace('https://', '')}
                </Box>
              </Stack>

              {/* Real screenshot if provided, otherwise a branded fallback */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: '38px 0 0 0',
                  background: showImage
                    ? '#0e0e10'
                    : `radial-gradient(120% 120% at ${
                        flip ? '85%' : '15%'
                      } 20%, ${project.accent}22 0%, transparent 55%), linear-gradient(160deg, #161619 0%, #0e0e10 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                {showImage ? (
                  <>
                    <Box
                      component="img"
                      src={project.image}
                      alt={`${project.name} screenshot`}
                      loading="lazy"
                      onError={() => setImgFailed(true)}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top center',
                        display: 'block',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        px: 2.5,
                        pt: 5,
                        pb: 2,
                        background:
                          'linear-gradient(to top, rgba(14,14,16,0.94), transparent)',
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 11,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: project.accent,
                        }}
                      >
                        {project.kind}
                      </Typography>
                    </Box>
                  </>
                ) : (
                  // Branded monogram fallback, scales cleanly down to mobile
                  <Stack
                    alignItems="center"
                    spacing={1.8}
                    sx={{ px: 3, textAlign: 'center' }}
                  >
                    <Box
                      sx={{
                        width: { xs: 58, md: 78 },
                        height: { xs: 58, md: 78 },
                        borderRadius: 3,
                        display: 'grid',
                        placeItems: 'center',
                        border: `1px solid ${project.accent}55`,
                        bgcolor: `${project.accent}14`,
                        boxShadow: `0 0 44px ${project.accent}33`,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Fraunces', serif",
                          fontStyle: 'italic',
                          fontSize: { xs: 30, md: 40 },
                          lineHeight: 1,
                          color: project.accent,
                        }}
                      >
                        {project.name[0]}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: { xs: 10, md: 11 },
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: project.accent,
                        maxWidth: 220,
                      }}
                    >
                      {project.kind}
                    </Typography>
                  </Stack>
                )}
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Copy */}
        <Grid item xs={12} md={6}>
          <Stack
            direction="row"
            alignItems="baseline"
            spacing={1.5}
            sx={{ mb: 1.5 }}
          >
            <Typography
              sx={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 13,
                color: project.accent,
              }}
            >
              {num}
            </Typography>
            <Typography
              sx={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                color: 'text.secondary',
              }}
            >
              {project.year}
            </Typography>
          </Stack>

          <Link
            href={project.url}
            target="_blank"
            rel="noreferrer"
            underline="none"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              color: 'text.primary',
              '&:hover .pname': { color: project.accent },
              '&:hover .parrow': {
                transform: 'translate(3px,-3px)',
                color: project.accent,
              },
            }}
          >
            <Typography
              variant="h3"
              className="pname"
              sx={{ fontSize: { xs: 30, md: 40 }, transition: 'color .25s ease' }}
            >
              {project.name}
            </Typography>
            <ArrowOutwardIcon
              className="parrow"
              sx={{ fontSize: 26, color: 'text.secondary', transition: 'all .25s ease' }}
            />
          </Link>

          <Typography
            sx={{ color: 'text.secondary', fontSize: 16.5, mt: 2, mb: 3 }}
          >
            {project.blurb}
          </Typography>

          <Stack spacing={1} sx={{ mb: 3 }}>
            {project.contribution.map((c) => (
              <Stack key={c} direction="row" spacing={1.2} alignItems="flex-start">
                <CheckIcon
                  sx={{ fontSize: 18, color: project.accent, mt: '2px', flexShrink: 0 }}
                />
                <Typography sx={{ fontSize: 15, color: 'text.primary' }}>
                  {c}
                </Typography>
              </Stack>
            ))}
          </Stack>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {project.stack.map((t) => (
              <Chip
                key={t}
                label={t}
                size="small"
                sx={{
                  bgcolor: 'transparent',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'text.secondary',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                  borderRadius: 1.5,
                }}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default function Projects() {
  return (
    <Section id="work" index="02" title="Selected work">
      <Box>
        {projects.map((p, i) => (
          <ProjectRow key={p.id} project={p} idx={i} />
        ))}
      </Box>
    </Section>
  )
}
