type RequestCardStatus = "OPEN" | "DONE";
type RequestCardProps  = {
    id: number,
    title: string,
    status: RequestCardStatus
}
  
export function RequestCard({ id, title, status }: RequestCardProps ) {
    return (
        <>
            <div style={{ display: "flex" }}>
                <div>
                    Request #{id}
                </div>
                <div>
                    {status}
                </div>
            </div>
            <div>
                {title}
            </div>
        </>

    )

  }