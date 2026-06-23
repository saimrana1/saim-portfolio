import { Box, Grid, Typography, Stack, Chip } from '@mui/material'
import { motion } from 'framer-motion'
import Section from './Section'
import { fadeUp, stagger, viewportOnce } from './motion'
import { skills } from '../data/content'

export default function Skills() {
  return (
    <Section id="skills" index="03" title="What I work with">
      <Grid
        container
        spacing={3}
        component={motion.div}
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {skills.map((cat) => (
          <Grid item xs={12} sm={6} key={cat.group}>
            <Box
              component={motion.div}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              sx={{
                height: '100%',
                p: { xs: 3, md: 4 },
                borderRadius: 4,
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                transition: 'border-color .3s ease',
                '&:hover': { borderColor: 'rgba(255,111,91,0.4)' },
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                spacing={1.5}
                sx={{ mb: 0.5 }}
              >
                <Typography variant="h4" sx={{ fontSize: 22 }}>
                  {cat.group}
                </Typography>
              </Stack>
              <Typography
                sx={{ color: 'text.secondary', fontSize: 14.5, mb: 2.5 }}
              >
                {cat.note}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {cat.items.map((item) => (
                  <Chip
                    key={item}
                    label={item}
                    sx={{
                      bgcolor: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'text.primary',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 12.5,
                      borderRadius: 2,
                      '&:hover': {
                        bgcolor: 'rgba(255,111,91,0.1)',
                        borderColor: 'rgba(255,111,91,0.4)',
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Section>
  )
}
