import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../Header/Header';
import PageContent from '../PageContent/PageContent';
import ResponsiveDrawer from '../ResponsiveDrawer/ResponsiveDrawer';

export default function MainComponent() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header />
      <ResponsiveDrawer />
      <PageContent />
    </Box>
  );
}
