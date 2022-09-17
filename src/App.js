import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Box } from '@mui/material'
import { Feed,VideoDetail,SearchDetail,Sricharan,ChannelDetail } from './components'

function App() {
  return (
   <BrowserRouter>
    <Box sx={{ backgroundColor: '#000',color:'#fff'}}>
      <Sricharan />
      <Routes>
      <Route path="/" exact element={<Feed />}/>
      <Route path="/video/:id" element={ <VideoDetail />}/>
      <Route path="/channel/:id" element={<ChannelDetail />}/>
        <Route path="/search/:searchTerm" element={<SearchDetail />}/>
      </Routes>
    </Box>
   </BrowserRouter>
  );
}

export default App; 
