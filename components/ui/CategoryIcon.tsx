import { Category } from "@/app/generated/prisma"

type CategoryIconProps = {
    category: Category
}

export default function CategoryIcon({category}: CategoryIconProps) {
  return (
    <div>{category.name}</div>
  )
}
