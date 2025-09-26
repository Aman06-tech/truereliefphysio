"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { ThemeProvider as NextThemesProvider, ThemeProviderProps as NextThemeProviderProps } from "next-themes"

type ThemeProviderProps = {
  children: React.ReactNode
} & NextThemeProviderProps

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}