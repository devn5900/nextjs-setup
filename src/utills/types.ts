export interface User {
  id: number
  name: string
  email: string
}
export interface ThemeContextType {
  theme: string
  toggleTheme: () => void
}
