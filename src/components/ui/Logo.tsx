export default function Logo() {
    return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer circle */}
            <circle cx="20" cy="20" r="18" stroke="url(#gradient)" strokeWidth="2.5" />

            {/* Letter C */}
            <path
                d="M 24 12 A 8 8 0 0 0 16 20 A 8 8 0 0 0 24 28"
                stroke="url(#gradient)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
            />

            {/* Gradient definition */}
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0088ff" />
                    <stop offset="100%" stopColor="#00c6ff" />
                </linearGradient>
            </defs>
        </svg>
    );
}
