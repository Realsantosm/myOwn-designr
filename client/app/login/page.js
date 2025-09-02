"use client";

import Image from "next/image";

export default function LoginPage() {
    return <div className="min-h-screen relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg')" }} />

        <div className="absolute inset-0" style={{background:'linear-gradient(180deg, rgba(0,0,0,0.8), rgba(0,0,0,0.4), rgba(0,0,0,0.8))'}} />
        <div className="absolute top-4 left-4 z-10">
            <Image src="https://static.canva.com/web/images/856bac30504ecac8dbd38dbee61de1f1.svg" alt="canva web" width={90} height={30} priority/>
        </div>
    </div>;
}

