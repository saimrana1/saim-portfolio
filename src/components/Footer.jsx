import { Box, Container, Stack, Typography, Link } from '@mui/material'
import { profile } from '../data/content'

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ borderTop: '1px solid', borderColor: 'divider', py: 4 }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          spacing={2}
        >
          <Typography sx={{ fontSize: 13.5, color: 'text.secondary' }}>
            © {new Date().getFullYear()} {profile.name}. Designed & built by hand.
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link
              href={`mailto:${profile.email}`}
              sx={{
                fontSize: 13.5,
                color: 'text.secondary',
                '&:hover': { color: 'primary.main' },
              }}
            >
              Email
            </Link>
            <Link
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              sx={{
                fontSize: 13.5,
                color: 'text.secondary',
                '&:hover': { color: 'primary.main' },
              }}
            >
              GitHub
            </Link>
            <Link
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              sx={{
                fontSize: 13.5,
                color: 'text.secondary',
                '&:hover': { color: 'primary.main' },
              }}
            >
              LinkedIn
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
