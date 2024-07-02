// Context.js
import { createContext, useContext, useState } from 'react'

const LayoutContext = createContext()

export const useLayout = () => useContext(LayoutContext)

export const LayoutProvider = ({ children }) => {
    const [footerVisible, setFooterVisible] = useState(true)

    return (
        <LayoutContext.Provider value={{ footerVisible, setFooterVisible }}>
            {children}
        </LayoutContext.Provider>
    )
}
