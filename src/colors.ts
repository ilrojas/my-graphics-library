function generateColors(count: number): string[] {
    const colors: string[] = [];
    for (let i = 0; i < count; i++) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const a = 0.8; // Increased brightness
        colors.push(`rgba(${r}, ${g}, ${b}, ${a})`);
    }
    return colors;
}

export const colors = generateColors(100);