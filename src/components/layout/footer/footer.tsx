import MRFQLogo from "@/assets/layout/MRFQ_White_Logo.png"
import { Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom"
export default function Footer() {
    return (
        <footer className="bg-[#0a0a0a] text-white">
            <div className="mx-auto max-w-7xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <div className="text-teal-600">
                            <img src={MRFQLogo} alt="MRFQ Logo" />
                        </div>

                        <p className="mt-4 max-w-xs text-white">
                            شركة نسيج لتقنية المعلومات، شركة مساهمة مبسطة، سجل تجاري رقم 1009161160 ص.ب. ١٢٢٥١ الرياض ٢٦٠٩ جميع الحقوق محفوظة 2024. مرفق. كل الحقوق محفوظة.

                        </p>

                        <ul className="mt-8 flex gap-6">
                            <li>
                                <Link target="_blank" to="https://www.instagram.com/mrfq.sa/" rel="noreferrer" className="text-white transition hover:opacity-75">
                                    <span className="sr-only">Instagram</span>

                                    <Instagram />
                                </Link>
                            </li>

                            <li>
                                <Link target="_blank" to="https://www.linkedin.com/company/mrfq" rel="noreferrer" className="text-white transition hover:opacity-75">
                                    <span className="sr-only">LinkedIn</span>

                                    <Linkedin />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <p className="font-medium text-white">Contact Us</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <Link target="_blank" to="https://meetings-eu1.hubspot.com/yalrashod" rel="noreferrer" className="text-white transition hover:opacity-75">Book a session
                                    </Link>
                                </li>

                                <li>
                                    <Link to="tel:+966556226204" rel="noreferrer" className="text-white transition hover:opacity-75">+966556226204
                                    </Link>
                                </li>
                                <li>
                                    <Link to="mailto:info@mrfq.sa" rel="noreferrer" className="text-white transition hover:opacity-75">info@mrfq.sa
                                    </Link>
                                </li>
                            </ul>
                        </div>





                    </div>
                </div>

                <p className="text-xs text-white">© 2025. MRFQ. All rights reserved.</p>
            </div>
        </footer >
    );
}