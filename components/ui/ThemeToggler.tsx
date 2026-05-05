"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { useEffect } from "react"


export function ModeToggle() {
    const { theme, setTheme } = useTheme()
    const Icon = theme == "light" ? Moon : Sun

    return (
        <div>

            <Button onClick={() => setTheme(theme == "light" ? "dark" : "light")} variant="outline" size="icon">
                <Icon className="h-[1.2rem] w-[1.2rem]" />
            </Button>


        </div>
    )
}
