type RequestSummaryProps = {
    total: number;
    openCount: number;
}

export function RequestSummary({total, openCount}:RequestSummaryProps) {
    return (
            <>
                <h3>Requests summary</h3>
                <p>Total requests: {total}</p>
                <p>Open requests: {openCount}</p>
            </>
        )
} 