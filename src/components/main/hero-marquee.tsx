import { InfiniteMarquee } from '@/components/ui/infinite-marquee'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

// Define items with text-only content to match MarqueeItem type
const items = [
    {
        text: "Company Logo",
        href: "#",
        content: (
            <div className="flex items-center px-4">
                <Image
                    src="/api/placeholder/32/32"
                    alt="Logo"
                    className="h-8 w-8 object-contain"
                    width={32}
                    height={32} 
                />
            </div>
        )
    },
    {
        text: "News",
        href: "/news",
        icon: <ArrowRight className="ml-2" />
    },
    {
        text: "Features",
        href: "/features"
    },
    {
        text: "Company Logo",
        href: "#",
        content: (
            <div className="flex items-center px-4">
                <Image
                    src="/api/placeholder/32/32"
                    alt="Logo"
                    className="h-8 w-8 object-contain"
                    width={32}
                    height={32}
                />
            </div>
        )
    },
    {
        text: "Documentation",
        href: "/docs"
    },
    {
        text: "Blog",
        href: "/blog"
    }
]

export default function MainMarquee() {
    return (
        <div className="w-full overflow-hidden">
            <InfiniteMarquee
                items={items}
                speed={30}
                direction="left"
            />
        </div>
    )
}