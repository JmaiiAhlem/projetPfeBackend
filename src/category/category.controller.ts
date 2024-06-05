

import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreateCategoryDto } from 'src/dto/category-create.dto';
import { CategoryService } from './category.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { UpdateCategoryDto } from 'src/dto/category-update.dto';

@Controller('category')
@ApiTags('Departement')

export class CategoryController{
   constructor(private readonly CategoryService: CategoryService) { }
@Post()
@ApiBody({ type: CreateCategoryDto })
   async createCategory(@Res() response, @Body() createCategoryDto: CreateCategoryDto) {
  try {
    const newCategory = await this.CategoryService.createCategory(createCategoryDto);
    return response.status(HttpStatus.CREATED).json({
    message: 'Category has been created successfully',
    newCategory,});
 } catch (err) {
    return response.status(HttpStatus.BAD_REQUEST).json({
    statusCode: 400,
    message: 'Error: Category not created!',
    error: 'Bad Request'
 });
 }
}

@Put('/:id')
@ApiBody({ type: UpdateCategoryDto })
async updateCategory(@Res() response,@Param('id') categoryId: string,
@Body() updateCategory: UpdateCategoryDto) {
  try {
   const existingEquipe = await this.CategoryService.updateCategory(categoryId, updateCategory);
  return response.status(HttpStatus.OK).json({
  message: 'Category has been successfully updated',
  existingEquipe,});
 } catch (err) {
   return response.status(err.status).json(err.response);
 }
}

@Get()
async getCategorys(@Res() response) {
try {
  const CategoryData = await this.CategoryService.getAllCategorys();
  return response.status(HttpStatus.OK).json({
  message: 'All Categorys data found successfully',CategoryData,});
 } catch (err) {
  return response.status(err.status).json(err.response);
 }
}
@Get('/:id')
async getCategory(@Res() response, @Param('id') CategoryId: string) {
 try {
    const existingCategory = await
this.CategoryService.getCategory(CategoryId);
    return response.status(HttpStatus.OK).json({
    message: 'Category found successfully',existingCategory,});
 } catch (err) {
   return response.status(err.status).json(err.response);
 }
}
@Delete('/:id')
async deleteCategory(@Res() response, @Param('id') CategoryId: string)
{
  try {
    const deletedCategory = await this.CategoryService.deleteCategory(CategoryId);
    return response.status(HttpStatus.OK).json({
    message: 'Category deleted successfully',
    deletedCategory,});
  }catch (err) {
    return response.status(err.status).json(err.response);
  }
 }
}
