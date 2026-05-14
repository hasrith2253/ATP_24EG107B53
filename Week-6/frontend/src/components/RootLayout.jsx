import Header from './Header'
import CounterBar from './CounterBar'
import {Outlet} from 'react-router-dom'

function RootLayout() {
  return (
    <div className='min-h-screen pb-32 bg-gray-100'>
      <Header />
      <div className='mx-8 mt-6 rounded-3xl bg-white p-8 shadow-lg sm:mx-12 sm:p-12'>
        <Outlet />
      </div>
      <CounterBar />
    </div>
  )
}

export default RootLayout