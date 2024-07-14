import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'
import PropTypes from 'prop-types'
import { AuthContextProvider } from './contexts/AuthContext.jsx'

const queryClient = new QueryClient()

export function App({ children }) {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>{children}</AuthContextProvider>
      </QueryClientProvider>
    </HelmetProvider>
  )
}

App.propTypes = {
  children: PropTypes.element.isRequired,
}
