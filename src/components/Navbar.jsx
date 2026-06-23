import { useEffect, useState } from 'react'
import { Box, Container, Stack, Button, useScrollTrigger } from '@mui/material'
import { motion } from 'framer-motion'
import { profile } from '../data/content'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 40 })
  const [active, setActive] = useState('')

  useEffect(() => {
    const ids = ['work', 'about', 'skills', 'contact']
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <Box
      component={motion.header}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        backgroundColor: scrolled ? 'rgba(14,14,16,0.72)' : 'transparent',
        borderBottom: scrolled
          ? '1px solid rgba(255,255,255,0.06)'
          : '1px solid transparent',
        transition: 'background-color .3s ease, border-color .3s ease',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ height: 72 }}
        >
          <Box
            component="a"
            href="#top"
            sx={{
              fontFamily: "'Fraunces', serif",
              fontSize: 22,
              fontWeight: 600,
              fontStyle: 'italic',
              letterSpacing: '-0.02em',
            }}
          >
            {profile.firstName}
            <Box component="span" sx={{ color: 'primary.main' }}>
              .
            </Box>
          </Box>

          <Stack
            direction="row"
            spacing={1}
            sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
          >
            {links.map((l) => {
              const isActive = active === l.href.slice(1)
              return (
                <Button
                  key={l.href}
                  href={l.href}
                  size="small"
                  sx={{
                    color: isActive ? 'text.primary' : 'text.secondary',
                    fontWeight: 500,
                    position: 'relative',
                    '&:hover': { color: 'text.primary', background: 'transparent' },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 4,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: isActive ? 16 : 0,
                      height: 2,
                      borderRadius: 2,
                      backgroundColor: 'primary.main',
                      transition: 'width .25s ease',
                    },
                  }}
                >
                  {l.label}
                </Button>
              )
            })}
            <Button
              href={`mailto:${profile.email}`}
              variant="outlined"
              size="small"
              sx={{
                ml: 1,
                borderColor: 'rgba(255,255,255,0.18)',
                color: 'text.primary',
                '&:hover': {
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  background: 'transparent',
                },
              }}
            >
              Let's talk
            </Button>
          </Stack>

          <Button
            href={`mailto:${profile.email}`}
            variant="outlined"
            size="small"
            sx={{
              display: { xs: 'inline-flex', md: 'none' },
              borderColor: 'rgba(255,255,255,0.18)',
              color: 'text.primary',
            }}
          >
            Contact
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}
