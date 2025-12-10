import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import MenuIcon from "./menuIcon"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger>
                <MenuIcon />
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle className="text-center mb-4">القائمة</DrawerTitle>
                    <div className="flex flex-col gap-6 items-center w-full pb-8">
                        <Link
                            to="#about"
                            onClick={() => setIsOpen(false)}
                            className="text-foreground hover:text-blue-600 transition-colors text-lg font-medium"
                        >
                            حول
                        </Link>
                        <Link
                            to="#advantages"
                            onClick={() => setIsOpen(false)}
                            className="text-foreground hover:text-blue-600 transition-colors text-lg font-medium"
                        >
                            المزايا
                        </Link>
                        <Link
                            to="#contact"
                            onClick={() => setIsOpen(false)}
                            className="text-foreground hover:text-blue-600 transition-colors text-lg font-medium"
                        >
                            تواصل
                        </Link>

                        <div className="w-full h-px bg-border my-2" />

                        <Link to="https://mrfq.sa/login" target='_blank' onClick={() => setIsOpen(false)}>
                            <Button
                                variant="outline"
                                className="rounded-full px-8 py-2 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all font-medium"
                            >
                                تسجيل الدخول
                            </Button>
                        </Link>
                    </div>
                </DrawerHeader>
            </DrawerContent>
        </Drawer >
    )
}