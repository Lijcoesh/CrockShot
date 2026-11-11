import { waitlistEndpoint } from 'src/Config/waitlist';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: string): boolean {
    return emailPattern.test(value.trim());
}

// `website` is een honeypot: mensen laten het leeg, bots vullen het in.
export async function joinWaitlist(email: string, website: string): Promise<void> {
    const response = await fetch(waitlistEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), website }),
    });

    if (!response.ok) {
        throw new Error(`Waitlist request failed with ${response.status}`);
    }
}
