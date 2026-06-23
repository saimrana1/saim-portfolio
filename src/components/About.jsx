import { Box, Grid, Typography, Stack } from '@mui/material'
import { motion } from 'framer-motion'
import Section from './Section'
import { fadeUp, stagger, viewportOnce } from './motion'
import { profile, experience } from '../data/content'

export default function About() {
  return (
    <Section id="about" index="01" title="A bit about me">
      <Grid container spacing={{ xs: 5, md: 10 }}>
        <Grid item xs={12} md={7}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.div variants={fadeUp}>
              <Typography
                sx={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: { xs: 22, md: 28 },
                  lineHeight: 1.5,
                  mb: 3,
                  '& em': { color: 'primary.main', fontStyle: 'italic' },
                }}
              >
                I build software that has to <em>work in production</em>, for the real
                users, real traffic, and business decisions that ride on it.
              </Typography>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Typography sx={{ color: 'text.secondary', fontSize: 17, mb: 2.5 }}>
                I'm a MERN-stack developer with {profile.yearsExperience}+ years
                shipping live products: a US ride-hailing platform, an AI tool for
                music artists, real-time maps, and the dashboards a team runs the
                business on. I'm just as comfortable shaping a React interface as I am
                designing a MongoDB schema, building a Nest service, or setting up the
                deployment pipeline that ships it to AWS.
              </Typography>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Typography sx={{ color: 'text.secondary', fontSize: 17 }}>
                What I do best is own a feature end to end, from the data model to the
                pixel, and make the calls that keep an app fast and maintainable as it
                grows. I write code the next engineer can pick up, and I measure success
                by whether the product actually solves the problem it shipped for.
              </Typography>
            </motion.div>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={5}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <Stack spacing={0}>
              {experience.map((job, i) => (
                <Box
                  key={i}
                  sx={{
                    py: 3,
                    borderTop: '1px solid',
                    borderColor: 'divider',
                    ...(i === experience.length - 1 && {
                      borderBottom: '1px solid',
                      borderBottomColor: 'divider',
                    }),
                  }}
                >
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="baseline"
                    sx={{ mb: 1 }}
                  >
                    <Typography sx={{ fontWeight: 600, fontSize: 17 }}>
                      {job.role}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 12,
                        color: 'primary.main',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {job.period}
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{ color: 'text.secondary', fontSize: 15, lineHeight: 1.6 }}
                  >
                    {job.summary}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </motion.div>
        </Grid>
      </Grid>
    </Section>
  )
}
