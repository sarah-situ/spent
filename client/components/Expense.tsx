interface Props {

  category_name:string
  date: Date
  description: string
  amount: number
}

export default function Expense({
  category_name,
  date,
  description,
  amount,
}: Props) 
{
  
    return (
    <div>
      <p>
       <strong>Date:</strong> {date}
        <strong>Category:</strong>{category_name}
        <strong>Description:</strong>{description}
        <strong>Amount:</strong>${amount}
      </p>
    </div>
  )
}
