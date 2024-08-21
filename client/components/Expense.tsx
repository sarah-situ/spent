interface Props {
  category_id: number
  date: string
  description: string
  amount: number
}

export default function Expense({
  category_id,
  date,
  description,
  amount,
}: Props) 
{
  
    return (
    <div>
      <p>
        {date}
        {category_id}
        {description}
        ${amount}
      </p>
    </div>
  )
}
