import { 
  AppBar, Toolbar, Typography, Button, Box, IconButton, 
  styled, alpha, useTheme
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Menu as MenuIcon } from '@mui/icons-material';

// Glass morphism app bar
const GlassAppBar = styled(AppBar)(({ theme }) => ({
  background: `linear-gradient(
    135deg,
    ${alpha(theme.palette.primary.main, 0.95)} 0%,
    ${alpha(theme.palette.primary.dark, 0.95)} 100%
  )`,
  backdropFilter: 'blur(12px)',
  boxShadow: theme.shadows[10],
  borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
  transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
}));

// Animated nav buttons
const NavButton = styled(Button)(({ theme }) => ({
  position: 'relative',
  margin: theme.spacing(0, 1),
  fontWeight: 600,
  letterSpacing: '0.8px',
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '2px',
    background: theme.palette.secondary.main,
    transform: 'scaleX(0)',
    transformOrigin: 'right',
    transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
  },
  '&:hover::before': {
    transform: 'scaleX(1)',
    transformOrigin: 'left',
  },
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: `0 4px 12px ${alpha(theme.palette.secondary.main, 0.2)}`,
  }
}));

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();
  const theme = useTheme();

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
        controls.start(isScrolled ? 'scrolled' : 'normal');
      }
    };

    const debouncedScroll = debounce(handleScroll, 50);
    window.addEventListener('scroll', debouncedScroll);
    return () => window.removeEventListener('scroll', debouncedScroll);
  }, [scrolled, controls]);

  // Animation variants
  const variants = {
    scrolled: {
      height: '60px',
      backdropFilter: 'blur(20px)',
      boxShadow: theme.shadows[16],
    },
    normal: {
      height: '80px',
      backdropFilter: 'blur(12px)',
      boxShadow: theme.shadows[10],
    },
  };

  return (
    <>
      <motion.div
        animate={controls}
        initial="normal"
        variants={variants}
        style={{
          position: 'fixed',
          width: '100%',
          zIndex: theme.zIndex.appBar,
        }}
      >
        <GlassAppBar>
          <Toolbar sx={{ height: '100%' }}>
            {/* Mobile menu button */}
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>

            {/* Logo/Brand */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <Typography
                variant="h6"
                noWrap
                component={Link}
                to="/"
                sx={{
                  mr: 2,
                  fontWeight: 800,
                  letterSpacing: '.15rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <img 
                  src="/images/logo.png" 
                  alt="Company Logo" 
                  style={{ 
                    maxWidth: '60px',
                    height: 'auto',
                    padding: '5px',
                    display: 'block',
                    marginRight: '15px',
                    transition: 'all 0.3s ease',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                    borderRadius: '4px',
                    objectFit: 'contain',
                    border: '1px solid rgba(0,0,0,0.05)',
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                    ':hover': {
                      transform: 'translateY(-1px)',
                      filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.15))',
                      borderColor: 'rgba(52,152,219,0.3)'
                    }
                  }} 
                />
                Income & Expense Manager
              </Typography>
            </motion.div>

            <Box sx={{ flexGrow: 1 }} />

            {/* Desktop navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              <NavButton color="inherit" component={Link} to="/">
                Dashboard
              </NavButton>
              <NavButton color="inherit" component={Link} to="/stock">
                Stock
              </NavButton>
              <NavButton color="inherit" component={Link} to="/finance">
                Finance
              </NavButton>
              <NavButton color="inherit" component={Link} to="/invoice">
                Invoices
              </NavButton>
            </Box>
          </Toolbar>
        </GlassAppBar>
      </motion.div>

      {/* Spacer for fixed navbar */}
      <Toolbar sx={{ height: scrolled ? '60px' : '80px' }} />
    </>
  );
};

function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default Navbar;