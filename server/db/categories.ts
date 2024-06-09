import db from './connection.ts'
import { Category } from '../../models/categories.ts'

// Get all categories 
export async function getAllCategories(): Promise<Category[]> {
  return db('categories').select()
}

// Get category by Id
export async function getCategoryById(id: number) {
  const result = await db('categories')
    .select(
      'categories.id as id',
      'categories.category_name as name',
    )
    .where({ id })
    .first()
  return result
}

// Add new category
export async function addCategory(data: Category) {
    const [id] = await db('categories').insert(data)
    return id
  }
  
export async function deleteCategory(id: number) {
    return db('categories').where({ id }).del()
}
