export default function formatMoney(amountCents: number): string {
    if (amountCents >= 0) {
        return `$${(amountCents / 100).toFixed(2)}`;
    } else {
        return `-$${((amountCents * -1) / 100).toFixed(2)}`;
    }
}
